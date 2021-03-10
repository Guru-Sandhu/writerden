# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.delete_all
Post.delete_all
User.delete_all

NUM_POSTS = 50
NUM_USER = 5
PASSWORD = 'supersecret'

super_user = User.create(
  first_name: 'jon',
  last_name: 'snow',
  email: 'js@winterfell.gov',
  password: PASSWORD
)

NUM_USER.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
      first_name: first_name,
      last_name: last_name,
      email: Faker::Internet.email,
      password: PASSWORD
  )
end

users = User.all

NUM_POSTS.times do
  p = Post.create(
    title: Faker::Book.title,
    body: Faker::Books::Lovecraft.paragraph_by_chars(characters: rand(1000..2000)),
    user: users.sample
  )
  if p.valid?
    p.reviews = rand(0..9).times.map do
      Review.new(user: users.sample, body: Faker::GreekPhilosophers.quote, rating: rand(0..5))
    end
  end
end

posts = Post.all
reviews = Review.all

puts Cowsay.say("Generated #{users.count} Users", :ghostbusters)
puts Cowsay.say("Generated #{posts.count} Posts", :frogs)
puts Cowsay.say("Generated #{reviews.count} Reviws", :sheep)
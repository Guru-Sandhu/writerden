class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :reviews
  has_one_attached :avatar
  
  validates(:email, presence: true, uniqueness: true, format: /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i)

end

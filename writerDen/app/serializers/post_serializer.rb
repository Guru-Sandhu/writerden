class PostSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :views,
    :body,
    :published,
    :created_at,
    :updated_at
  )
  has_many :reviews
end

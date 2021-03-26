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
  belongs_to :user, key: :author
end

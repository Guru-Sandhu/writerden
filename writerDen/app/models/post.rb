class Post < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  has_one_attached :thumbnail
  
  before_validation(:set_default_values_for_new_post)

  validates(:body, presence: true)

  private

  def set_default_values_for_new_post
    self.published ||= false
    self.views = 0
  end

end

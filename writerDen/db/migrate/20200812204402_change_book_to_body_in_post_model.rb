class ChangeBookToBodyInPostModel < ActiveRecord::Migration[6.0]
  def change
    rename_column :posts, :book, :body
  end
end

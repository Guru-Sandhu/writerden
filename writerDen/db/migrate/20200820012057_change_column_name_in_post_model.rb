class ChangeColumnNameInPostModel < ActiveRecord::Migration[6.0]
  def change
    rename_column :posts, :coverPath, :title
  end
end

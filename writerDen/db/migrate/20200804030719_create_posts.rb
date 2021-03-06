class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :views
      t.string :book
      t.string :coverPath
      t.boolean :published

      t.timestamps
    end
  end
end

class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.json :map, null: false
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
    add_index :routes, :user_id
  end
end

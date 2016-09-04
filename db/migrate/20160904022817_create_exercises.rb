class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :muscle_group, null: false

      t.timestamps null: false
    end
    add_index :exercises, :user_id
  end
end

class CreateStaticWorkouts < ActiveRecord::Migration
  def change
    create_table :static_workouts do |t|
      t.integer :user_id, null: false
      t.date :date, null: false
      t.integer :duration, null: false
      t.string :focus
      t.integer :calories, null:false

      t.timestamps null: false
    end
    add_index :static_workouts, :user_id
  end
end

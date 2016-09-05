class CreateTravelWorkouts < ActiveRecord::Migration
  def change
    create_table :travel_workouts do |t|
      t.integer :user_id, null: false
      t.integer :route_id, null: false
      t.date :date, null: false
      t.integer :calories, null: false

      t.timestamps null: false
    end

    add_index :travel_workouts, :user_id
    add_index :travel_workouts, :route_id
  end
end

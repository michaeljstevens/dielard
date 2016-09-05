class AddNotesToTravelWorkout < ActiveRecord::Migration
  def change
    add_column :travel_workouts, :notes, :text
  end
end

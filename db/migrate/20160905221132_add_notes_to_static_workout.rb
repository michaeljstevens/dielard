class AddNotesToStaticWorkout < ActiveRecord::Migration
  def change
    add_column :static_workouts, :notes, :text
  end
end

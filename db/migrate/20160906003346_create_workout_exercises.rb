class CreateWorkoutExercises < ActiveRecord::Migration
  def change
    create_table :workout_exercises do |t|
      t.integer :static_workout_id, null: false
      t.integer :exercise_id, null: false
      t.integer :sets, null: false
      t.integer :reps, null: false
      t.integer :weight, null: false

      t.timestamps null: false
    end
    add_index :workout_exercises, :static_workout_id
    add_index :workout_exercises, :exercise_id
  end
end

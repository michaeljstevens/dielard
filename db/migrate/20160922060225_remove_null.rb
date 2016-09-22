class RemoveNull < ActiveRecord::Migration
  def change
    change_column_null(:routes, :start_lat, true)
    change_column_null(:routes, :start_lng, true)
    change_column_null(:routes, :end_lat, true)
    change_column_null(:routes, :end_lng, true)
  end
end

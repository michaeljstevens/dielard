class AddLatLng < ActiveRecord::Migration
  def change
    remove_column :routes, :start_pos
    remove_column :routes, :end_pos
    add_column :routes, :start_lat, :float, null: false
    add_column :routes, :start_lng, :float, null: false
    add_column :routes, :end_lat, :float, null: false
    add_column :routes, :end_lng, :float, null: false
  end
end

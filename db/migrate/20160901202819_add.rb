class Add < ActiveRecord::Migration
  def change
    remove_column :routes, :map
    add_column :routes, :start_lat, :float, null: false
    add_column :routes, :start_lng, :float, null: false
    add_column :routes, :end_lat, :float, null: false
    add_column :routes, :end_lng, :float, null: false
    add_column :routes, :distance, :string, null: false
    add_column :routes, :duration, :string, null: false
  end
end

class AddArray < ActiveRecord::Migration
  def change
    remove_column :routes, :coords
    add_column :routes, :coords, :text, array: true
  end
end

class RemoveCoords < ActiveRecord::Migration
  def change
    remove_column :routes, :coords
  end
end

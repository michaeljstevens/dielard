class AddJson < ActiveRecord::Migration
  def change
    add_column :routes, :appcoords, :json
  end
end

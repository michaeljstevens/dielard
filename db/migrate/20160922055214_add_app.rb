class AddApp < ActiveRecord::Migration
  def change
    add_column :routes, :coords, :text, array: true
  end
end

class AddColumn < ActiveRecord::Migration
  def change
    remove_column :routes, :start_pos
    remove_column :routes, :end_pos
    add_column :routes, :start_pos, :string, null: false
    add_column :routes, :end_pos, :string, null: false
  end
end

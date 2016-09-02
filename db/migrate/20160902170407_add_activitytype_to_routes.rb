class AddActivitytypeToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :activity_type, :string
  end
end

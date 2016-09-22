class ChangeRouteType < ActiveRecord::Migration
  def change
    change_column(:routes, :coords, :text)
  end
end

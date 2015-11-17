class ChangeNull < ActiveRecord::Migration
  def change
    remove_column :destinations, :picture_url
  end
end

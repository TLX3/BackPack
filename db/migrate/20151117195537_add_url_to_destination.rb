class AddUrlToDestination < ActiveRecord::Migration
  def change
    add_column :destinations, :picture_url, :string
  end
end

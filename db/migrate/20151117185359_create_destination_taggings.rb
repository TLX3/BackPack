class CreateDestinationTaggings < ActiveRecord::Migration
  def change
    create_table :destination_taggings do |t|

      t.timestamps null: false
    end
  end
end

class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :picture_url, null: false
      t.string :location, null: false
      t.string :cost, null: false
      t.integer :author_id, null: false
      t.timestamps null: false
    end

    add_index :destinations, :author_id
  end
end

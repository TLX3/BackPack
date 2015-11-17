class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :description, null: false
      t.integer :destination_id, null: false
      t.timestamps null: false
    end

    add_index :groups, :destination_id
  end
end

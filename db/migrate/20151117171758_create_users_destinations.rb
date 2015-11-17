class CreateUsersDestinations < ActiveRecord::Migration
  def change
    create_table :users_destinations do |t|
      t.integer :user_id, null: false
      t.integer :destination_id, null: false
      t.timestamps null: false
    end

    add_index :users_destinations, [:user_id, :destination_id], unique: true
    add_index :users_destinations, :destination_id
  end
end

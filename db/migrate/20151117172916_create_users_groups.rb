class CreateUsersGroups < ActiveRecord::Migration
  def change
    create_table :users_groups do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps null: false
    end
    add_index :users_groups, [:user_id, :group_id], unique: true
    add_index :users_groups, :group_id
  end
end

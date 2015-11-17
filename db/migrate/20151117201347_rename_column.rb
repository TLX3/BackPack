class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :tags, :CreateTags, :name
  end

end

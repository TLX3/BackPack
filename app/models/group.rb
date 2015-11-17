class Group < ActiveRecord::Base
  validates :description, :destination_id, presence: true

  belongs_to :destination
  has_many :users_groups
end

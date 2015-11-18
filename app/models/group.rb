class Group < ActiveRecord::Base
  validates :description, :destination_id, presence: true

  belongs_to :destination
  has_many :users_groups, dependent: :destroy
  has_many :users,
     through: :users_groups,
     source: :user

end

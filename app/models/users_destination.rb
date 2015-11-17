class UsersDestination < ActiveRecord::Base
  validates :user_id, :destination_id, presence: true
  validates :user_id, uniqueness: {scope: :destination_id}
  belongs_to :user
  belongs_to :destination
end

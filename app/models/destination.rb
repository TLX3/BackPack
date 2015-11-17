class Destination < ActiveRecord::Base
  validates :name, :location, :description, :author_id, presence: true
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :groups
  has_many :users_destinations
  has_many :destination_taggings
end

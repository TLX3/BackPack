class Destination < ActiveRecord::Base
  validates :title, :location, :description, :author_id, presence: true
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :groups
  has_many :users_destinations
  has_many :destination_taggings
  has_many :users,
    through: :users_destinations,
    source: :user
  has_many :tags,
    through: :destination_taggings,
    source: :tag
end

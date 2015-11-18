class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :user_taggings
  has_many :destination_taggings
  has_many :users,
    through: :user_taggings,
    source: :user
  has_many :destinations,
    through: :destination_taggings,
    source: :destination
end

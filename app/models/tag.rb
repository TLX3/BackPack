class Tag < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :user_taggings
  has_many :destination_taggings
end

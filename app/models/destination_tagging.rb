class DestinationTagging < ActiveRecord::Base
  validates :destination_id, :tag_id, presence: true
  validates :destination_id, uniqueness: {scope: :tag_id}

  belongs_to :destination
  belongs_to :tag
end

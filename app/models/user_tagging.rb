class UserTagging < ActiveRecord::Base
  validates :user_id, :tag_id, presence: true
  validates :user_id, uniqueness: {scope: :tag_id}

  belongs_to :user
  belongs_to :tag
end

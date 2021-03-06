class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  has_many :authored_destinations,
      class_name: :Destination,
      foreign_key: :author_id,
      primary_key: :id
  has_many :users_destinations, dependent: :destroy
  has_many :users_groups, dependent: :destroy
  has_many :user_taggings, dependent: :destroy, inverse_of: :user
  has_many :destinations,
    through: :users_destinations,
    source: :destination
  has_many :groups,
    through: :users_groups,
    source: :group
  has_many :tags,
    through: :user_taggings,
    source: :tag

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

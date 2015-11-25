json.array! @users do |user|
  json.extract! user, :id, :username, :bio, :location, :picture_url
  json.set! :memberSince, current_user.created_at.strftime("%B %e, %Y")
end

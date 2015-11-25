json.extract! current_user || @user, :username, :bio, :picture_url
json.set! :memberSince, current_user.created_at.strftime("%B %e %Y")

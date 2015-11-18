json.extract! current_user, :username, :bio
json.set! :memberSince, current_user.created_at.strftime("%B %e %Y")

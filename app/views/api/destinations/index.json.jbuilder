json.array! @destinations do |destination|
  json.extract! destination, :title, :description, :location, :cost, :author_id, :picture_url, :id
  json.set! :created, destination.created_at.strftime("%B %e %Y")
end

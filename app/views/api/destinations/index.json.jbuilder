json.array! @destinations do |destination|
  json.extract! destination, :title, :description, :location, :cost, :author_id, :picture_url, :id
end

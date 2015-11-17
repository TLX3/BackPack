json.array! @destinations do |destination|
  json.extract! destination, :title, :description, :location, :cost, :author_id
end

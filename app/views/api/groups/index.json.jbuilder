json.events do
  json.array! @groups do |group|
    json.extract! group, :description
  end
end

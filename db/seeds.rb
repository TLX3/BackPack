# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Destination.create!({title: "Island hopping in the Pacific", description: "Set sail", location: "Tahiti",
#   cost: "$10000", author_id: 10, picture_url: ""})
#
# Destination.create!({title: "Paragliding in the Himalayas", description: "Not recommended", location: "Everest Base Camp",
#   cost: "$5000", author_id: 2, picture_url: ""})
#
# Destination.create!({title: "Exloring the Amazon", description: "A lot of poisonous creatures", location: "Somewhere in Brazil",
#   cost: "$2000", author_id: 3, picture_url: ""})
#
# Destination.create!({title: "MTA ride", description: "Explore the city by train", location: "New York",
#   cost: ">=$2.75", author_id: 4, picture_url: ""})

UsersDestination.create!({user_id: 1, destination_id: 1})
UsersDestination.create!({user_id: 1, destination_id: 2})
UsersDestination.create!({user_id: 1, destination_id: 3})
UsersDestination.create!({user_id: 2, destination_id: 4})

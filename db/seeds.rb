# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Destination.create!({title: "Island hopping in the Pacific", description: "Set sail", location: "Tahiti",
  cost: "$10000", author_id: 10, picture_url: "http://cdni.condenast.co.uk/646x430/d_f/FregateIslandPrivate_cnt_12_646x430.jpg"})

Destination.create!({title: "Paragliding in the Himalayas", description: "Not recommended", location: "Everest Base Camp",
  cost: "$5000", author_id: 2, picture_url: "http://www.interestingfunfacts.com/files/2012/02/facts-about-himalayas.jpg"})

Destination.create!({title: "Exloring the Amazon", description: "A lot of poisonous creatures", location: "Somewhere in Brazil",
  cost: "$2000", author_id: 3, picture_url: "http://vignette3.wikia.nocookie.net/hanna-barbera/images/0/0b/Amazon-jungle-permits1.jpg/revision/latest?cb=20140710182245"})

Destination.create!({title: "MTA ride", description: "Explore the city by train", location: "New York",
  cost: ">=$2.75", author_id: 4, picture_url: "http://s.wsj.net/public/resources/images/BN-AL411_nynewt_G_20131118164047.jpg"})

UsersDestination.create!({user_id: 1, destination_id: 1})
UsersDestination.create!({user_id: 1, destination_id: 2})
UsersDestination.create!({user_id: 1, destination_id: 3})
UsersDestination.create!({user_id: 1, destination_id: 4})
UsersDestination.create!({user_id: 2, destination_id: 1})
UsersDestination.create!({user_id: 2, destination_id: 2})
UsersDestination.create!({user_id: 2, destination_id: 3})
UsersDestination.create!({user_id: 2, destination_id: 4})
UsersDestination.create!({user_id: 3, destination_id: 1})
UsersDestination.create!({user_id: 3, destination_id: 2})
UsersDestination.create!({user_id: 3, destination_id: 3})
UsersDestination.create!({user_id: 3, destination_id: 4})

Tag.create!({name: "Thing"})
Tag.create!({name: "Something"})
Tag.create!({name: "Cool"})
Tag.create!({name: "Stuff"})

UserTagging.create!({user_id:1, tag_id: 1})
UserTagging.create!({user_id:1, tag_id: 2})
UserTagging.create!({user_id:1, tag_id: 3})
UserTagging.create!({user_id:1, tag_id: 4})
UserTagging.create!({user_id:2, tag_id: 1})
UserTagging.create!({user_id:2, tag_id: 2})
UserTagging.create!({user_id:2, tag_id: 3})
UserTagging.create!({user_id:2, tag_id: 1})

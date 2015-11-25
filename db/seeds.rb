# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Destination.create!({title: "Islands in the South Pacific", description: "Set sail in the Pacific", location: "Tahiti, French Polynesia",
  cost: "$10,000", author_id: 1, picture_url: "http://cdni.condenast.co.uk/646x430/d_f/FregateIslandPrivate_cnt_12_646x430.jpg"})

Destination.create!({title: "Paragliding in the Himalayas", description: "Not recommended", location: " सगरमाथा / Everest Summit",
  cost: "$5000", author_id: 2, picture_url: "http://www.interestingfunfacts.com/files/2012/02/facts-about-himalayas.jpg"})

Destination.create!({title: "Exploring the Amazon", description: "A lot of poisonous creatures around", location: "selva amazónica, Northwest Brazil",
  cost: "$2000", author_id: 3, picture_url: "http://vignette3.wikia.nocookie.net/hanna-barbera/images/0/0b/Amazon-jungle-permits1.jpg/revision/latest?cb=20140710182245"})

Destination.create!({title: "MTA ride", description: "Explore the city by train", location: "New York / Big Apple",
  cost: ">=$2.75", author_id: 4, picture_url: "http://s.wsj.net/public/resources/images/BN-AL411_nynewt_G_20131118164047.jpg"})

Destination.create!({title: "Shinjuku", description: "Somewhere in Tokyo", location: "新宿区, Japan",
  cost: "$3000", author_id: 1, picture_url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sunset_over_Shinjuku.jpg"})

Destination.create!({title: "Pyramids at Giza", description: "Take a journey through the past", location: "الهرم، الجيزة، Egypt
",cost: "$2000", author_id: 2, picture_url: "http://world-pyramids.com/en/assets/images/Egypt/Giza/IMG_3376_resize.JPG"})

Destination.create!({title: "Blood Moon", description: "Travel 238,900 miles away", location: "σελήνη",
  cost: "100,000,000", author_id: 3, picture_url: "http://cdn.images.express.co.uk/img/dynamic/80/590x/secondary/Blood-Moon-350143.jpg"})

Destination.create!({title: "Hanging Gardens of Babylon", description: "Too bad, doesn't exist", location: "المحاويل, Iraq",
  cost: "$3000", author_id: 4, picture_url: "https://i.ytimg.com/vi/2hVQ7vIsDSA/maxresdefault.jpg"})

Destination.create!({title: "North Pole", description: "Hypothermia and frostbite", location: "Antartica",
  cost: "$0", author_id: 1, picture_url: "http://www.ecorazzi.com/wp-content/uploads/2013/07/North_Pole_Lake-592x344.jpg"})



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

Tag.create!({name: "Amazing"})
Tag.create!({name: "Superb"})
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
UserTagging.create!({user_id:3, tag_id: 3})
UserTagging.create!({user_id:3, tag_id: 1})

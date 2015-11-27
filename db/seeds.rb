# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Destination.create!({title: "Pyramids at Giza / أهرامات الجيزة‎", description: "This complex of ancient monuments includes the three pyramid complexes known as the Great Pyramids, the massive sculpture known as the Great Sphinx, several cemeteries, a workers' village and an industrial complex.", location: "الهرم، الجيزة، Egypt",
  cost: "$10,000", author_id: 1, picture_url: "http://world-pyramids.com/en/assets/images/Egypt/Giza/IMG_3376_resize.JPG"})

Destination.create!({title: "Taj Mahal / ताज महल", description: "A white marble mausoleum located on the southern bank of the Yamuna River in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned 1628–1658) to house the tomb of his favorite wife of three, Mumtaz Mahal.", location: "Agra, Uttar Pradesh, India",
  cost: "$5000", author_id: 2, picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/1243px-Taj_Mahal_in_March_2004.jpg"})

Destination.create!({title: "Colosseum / Amphitheatrum Flavium", description: "An oval amphitheatre in the centre of the city of Rome, Italy. Built of concrete and sand, it is the largest amphitheatre ever built and is considered one of the greatest works of architecture and engineering.", location: "Regio IV Templum Pacis",
  cost: "$2000", author_id: 3, picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/1280px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"})

Destination.create!({title: "Tahiti", description: "Tahiti is the economic, cultural and political centre of French Polynesia. The capital of the collectivity, Pape'ete, is located on the northwest coast with the only international airport in the region, Fa'a'ā International Airport, situated 5 km from the town centre.", location: "Tahiti, French Polynesia",
  cost: "3000", author_id: 4, picture_url: "http://cdni.condenast.co.uk/646x430/d_f/FregateIslandPrivate_cnt_12_646x430.jpg"})

Destination.create!({title: "Santorini / Σαντορίνη", description: "An island in the southern Aegean Sea, about 200 km southeast of Greece's mainland. It is the largest island of a small, circular archipelago which bears the same name and is the remnant of a volcanic caldera.", location: "Santorini, Greece",
  cost: "$3000", author_id: 1, picture_url: "http://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3016/SITours/3-night-santorini-tour-from-athens-in-athens-117734.jpg"})

Destination.create!({title: "Angkor Wat / អង្គរវត", description: "A temple complex in Cambodia and the largest religious monument in the world. It was originally constructed as a Hindu temple for the Khmer Empire.", location: "Siem Riep, Cambodia
",cost: "$2000", author_id: 2, picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Angkor_Wat.jpg/1280px-Angkor_Wat.jpg"})

Destination.create!({title: "Machu Picchu", description: "Most archaeologists believe that Machu Picchu was built as an estate for the Inca emperor Pachacuti (1438–1472). Often mistakenly referred to as the Lost City of the Incas", location: "Cuzco Region, Peru",
  cost: "3000", author_id: 3, picture_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg/1049px-80_-_Machu_Picchu_-_Juin_2009_-_edit.2.jpg"})

Destination.create!({title: "Petra / لبتراءا", description: "A historical and archaeological city in the southern Jordanian governorate of Ma'an that is famous for its rock-cut architecture and water conduit system.", location: "Ma'an Governorate, Jordan",
  cost: "$3000", author_id: 4, picture_url: "http://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/exhibitions/past-exhibitions/petra/petra_heroimage/292266-1-eng-US/petra_heroimage_dynamic_lead_slide.jpg"})

Destination.create!({title: "NYC", description: "Explore the city by train", location: "New York, New York",
  cost: "$0", author_id: 1, picture_url: "http://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/f2/new-york-city.jpg"})

  Destination.create!({title: "San Francisco", description: "The cultural, commercial, and financial center of Northern California and the only consolidated city-county in California", location: "San Francisco, CA",
    cost: "$10,000", author_id: 2, picture_url: "http://www.sanfrancisco.travel/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg"})

  Destination.create!({title: "Bangkok / กรุงเทพมหานคร", description: "The capital and most populous city in Thailand. The city occupies 1,568.7 square kilometres in the Chao Phraya River delta in Central Thailand, and has a population of over 8 million", location: "Central Thailand",
    cost: "$5000", author_id: 3, picture_url: "http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOP10/top-10-best-hotels/teaserMultiLarge/image/top10-hotels-.jpg"})

  Destination.create!({title: "Tokyo", description: "One of the 47 prefectures of Japan, and is both the capital and largest city of Japan. The Greater Tokyo Area is the most populous metropolitan area in the world.", location: "新宿区, Japan",
    cost: "$2000", author_id: 4, picture_url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Sunset_over_Shinjuku.jpg"})

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
Tag.create!({name: "Beautiful"})

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

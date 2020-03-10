# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
 
@alex = Agent.create!(name: 'Alex Battle' , email: Faker::Internet.email(name: 'Alex'), phoneNumber: Faker::PhoneNumber.cell_phone, website: 'alex.com')
@property = @alex.properties.build( address: Faker::Address.street_address, propertyType: 'duplex', rooms: 3, bathrooms: 2, rentAmount: 1000, rentedTo: 0, purchasePrice: 20000, soldTo: 'Keri Hilson', availability: true)
@property.save

@trent = Agent.create!( name: 'Trent Taylor', email: Faker::Internet.email(name: 'Trent'), phoneNumber: Faker::PhoneNumber.cell_phone, website: 'trent.com')
@property = @trent.properties.build( address: Faker::Address.street_address, propertyType: 'loft', rooms: 2, bathrooms: 1, rentAmount: 1500, rentedTo: 'Mya Planet', purchasePrice: 2000, soldTo: 'l', availability: true)
@property.save

@jason = Agent.create!(name: 'Alex Battle', email:'alex212@gmail.com', phoneNumber: '7574052434', website: 'alex.com')
@property = @jason.properties.build(address: '555 State Street', propertyType: 'condo', rooms: 2, bathrooms: 1, rentAmount: 1500, rentedTo: '', purchasePrice: '', soldTo: '', availability: true)
@property.save
puts "#{Property.count} property created!"
 puts "#{Agent.count} agents created!"

#  #Alex properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Trent Properties 
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Jason Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Tory Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Jamal Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Brittany Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Jasmine Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Alisha Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Tara Properties
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')

#  #Elizabeth Properties 
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')
#  Property.create!(propertyId: '', address: '', propertyType: '', rooms: '', bathrooms: '', rentAmount: '', rentedTo: '', purchasePrice: '', soldTo: '', availability: '', photo: '')



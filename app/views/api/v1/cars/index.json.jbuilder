json.array! @cars.each do |car|
  json.id car.id
  json.name car.name
  json.model car.model
  json.manufacturer car.manufacturer
end
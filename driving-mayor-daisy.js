const carPassing = function(cars, speed) {
  let tempObject = {};
  tempObject['speed'] = speed;
  tempObject['time'] = Date.now();
  cars.push(tempObject);
  return cars;
}
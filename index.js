// Write your solution in this file!
let driver = {name:'sam'}
function updateDriverWithKeyAndValue(driver,key,value){
  driver ={ ...driver}
  driver[key] = value

  return driver
}

updateDriverWithKeyAndValue(driver,'address', '11 Broadway')
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){

  driver[key] = value

  return driver
}

destructivelyUpdateDriverWithKeyAndValue(driver,'address','11 Broadway')

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver.kye;
}

destructivelyDeleteFromDriverByKey(driver,'name')

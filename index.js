var recipes = new Object ({})
var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) { return Object.assign({},obj, {[key]:value})}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { object[key]= value
  return object
}
var obj2 = Object.assign({}, obj)
function deleteFromObjectByKey(object, key) { return obj2.key}
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var objectArray = [];
  var arrValues = [];
  
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return '' + obj;
  } 

  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } 
  
  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }
    else {
      _.each(obj, function (element, index, obj) {
        arrValues.push(stringifyJSON(element));
      });
      return '[' + arrValues + ']';
    }
  }

  else if (obj instanceof Object) {
    
    objKeys = Object.keys(obj);

    _.each(objKeys, function (key) {
      var keyStyle = '"' + key + '":';
      var value = obj[key];
      if (value instanceof Function || typeof value === undefined) {
        objectArray.push('');
      }

      else if (typeof value === 'string') {
        objectArray.push(keyStyle + '"' + value + '"');
      }
      
      else if (typeof value === 'number' || value === null || typeof value === 'boolean') {
        objectArray.push(keyStyle + value);
      } 
      
      else if (value instanceof Object) {
        objectArray.push(keyStyle + stringifyJSON(value));
      }
    });
    return '{' + objectArray + '}';
  }
};

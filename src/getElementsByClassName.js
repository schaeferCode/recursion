// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = []; 

  function findClass (node) {


    for (var i = 0; i < node.children.length; i++) {
      if (node.children[i].classList.length > 0 && node.children[i].classList.value.indexOf(className) >= 0) {
        result.push(node.children[i])
      }

      if (node.children[i].children.length > 0) {
        findClass (node.children[i]);
      }       
    }
  }

  findClass(document);
  return result;
}

function difference(arr1,arr2){
  return  arr1.filter(value => !arr2.includes(value)).concat(arr2.filter(value => !arr1.includes(value)))
}
function sym(args) {
let aux = [...arguments]; 
var aux1 =[]
aux.filter(function(inside){
   if(Array.isArray(inside)) {
      var modified = inside.filter(function (item,index) {
          return inside.indexOf(item) == index
      })  
   }
   aux1.push(modified)
   return aux1; 
});
return aux1.reduce(difference)

}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
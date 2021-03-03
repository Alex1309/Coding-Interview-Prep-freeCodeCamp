function updateInventory(arr1, arr2) {
var all = arr1.concat(arr2)
var allfixed = []
for(let i=0;i<all.length;i++){
    for(let j=i+1;j<all.length;j++){
        if(all[i][1]==all[j][1]){
            let sum = all[i][0]+all[j][0]
            all[i][0]=sum;
            
        }
    }
    var exists = allfixed.find(el => el[1] === all[i][1])
    if(!exists)
        allfixed.push(all[i])
 }
  allfixed.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    else{
      return -1;
    }
  });
return allfixed
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]];

console.log(updateInventory(curInv, newInv));

function updateInventory(arr1, arr2) {
var all = arr1.concat(arr2)
console.log(all)
var allfixed = []
for(let i=0;i<all.length;i++){
    for(let j=i+1;j<all.length;j++){
        if(all[i][1]==all[j][1]){
            if(all[i][0]>all[j][0])
                allfixed.push(all[i])
            else
                allfixed.push(all[j])
        }
    }
}
console.log(allfixed)

}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

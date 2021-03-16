let final =[];
function permute(arr,l,r){
  let s="";
  if(l==r){
    s+=arr.join('');
    final.push(s)
  }

  for(let i=l;i<r;i++){
  [arr[l], arr[i]] = [arr[i], arr[l]];
  permute(arr,l+1,r);
  [arr[l], arr[i]] = [arr[i], arr[l]];
  }
}
function permAlone(str) {
let arr = str.split('');
permute(arr,0,arr.length)
var regex = /(.)\1+/;
let total = final.length;
for(let i=0;i<final.length;i++){
  if(final[i].match(regex)!=null){
    total--;
  }
}
final =[];
return total;
}


console.log(permAlone('aab'));
console.log(permAlone('aab'));

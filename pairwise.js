function pairwise(arr, arg) {
  let sum=0;
  let arr1=[]
 
  let actual=0;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==arg && arr1[i]!=1 && arr1[j]!=1){
        actual = i+j;
        arr1[i]=1;
        arr1[j]=1;
        sum+=actual
      }
    }
  }
  return sum;
}

console.log(pairwise([1,1,1], 2));
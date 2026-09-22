const sum=(...num)=>{
  const sum=num.reduce((s,i)=>(s+i));
  return sum;
}


const add=(...num)=>{
  let total=0;
  for(let i of num){
    total=total+i;
  }
  return total;
}
export  {sum,add};
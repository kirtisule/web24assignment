   
  //  1 Check Prime 
   
      let count=0;

    let num=11;
     for(let i=0;i<=num;i++){
         if(num%i==0){
           count++;
          }
      }
// console.log(count)

if (count == 2){
    console.log("Number is prime");
}else {
    console.log("Number is not prime");

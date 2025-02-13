class Car{
  brand;
  model;

  constructor(carDetails){
    this.brand=carDetails.brand;
    this.model=carDetails.model;
  }

  displayInfo(){
    console.log(this.brand);
    console.log(this.model);
  }
}

const Cars=[{
  brand:'Toyota',
  model:'Corolla'
},
{
  brand:'Tesla',
  model:'Model 3'
}].map((carDetails)=>{
  return new Car(carDetails);
});

console.log(Cars);
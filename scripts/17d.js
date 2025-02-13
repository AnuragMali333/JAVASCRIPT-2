class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen=false;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    const trunkStatus=this.isTrunkOpen?'open':'closed';
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }

  go() {
    if(!this.isTrunkOpen){
      this.speed+=5;
    }

    if(this.speed>200){
      this.speed=200;
    }
  }

  brake() {
    this.speed-=5;

    if(this.speed<0){
      this.speed=0
    }
  }

  openTrunk(){
    if(this.speed ===0){
      this.isTrunkOpen=true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen=false;
  }
}

const Cars = [{
  brand: 'Toyota',
  model: 'Corolla'
},
{
  brand: 'Tesla',
  model: 'Model 3'
}].map((carDetails) => {
  return new Car(carDetails);
});

console.log(Cars[0]);
console.log(Cars[1]);

Cars[0].displayInfo();
Cars[0].go();
Cars[0].go();
Cars[0].go();
Cars[0].brake();
Cars[0].displayInfo();

// Trunk should not open since the car is moving.
Cars[0].openTrunk();
Cars[0].displayInfo();

Cars[1].displayInfo();
Cars[1].go();
Cars[1].brake();
Cars[1].brake();
Cars[1].displayInfo();

// Trunk should open since the car is not moving.
Cars[1].openTrunk();
// Car should not go since the trunk is open.
Cars[1].go();
Cars[1].displayInfo();

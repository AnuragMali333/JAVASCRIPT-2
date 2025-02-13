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
class RaceCar extends Car{
  accleration;

  constructor(carDetails){
    super(carDetails);
    this.accleration=carDetails.accleration;
  }

  go(){
    this.speed+=this.accleration;

    if(this.speed>300){
      this.speed=300
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
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

const raceCar=new RaceCar({
  brand:'McLaren',
  model:'F1',
  accleration:20
})



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

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
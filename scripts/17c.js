class Car {
  brand;
  model;
  speed = 0;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
  }

  displayInfo() {
    console.log(this.brand);
    console.log(this.model);
    console.log(`Speed:${this.speed} km/h`);

  }
  go() {
    if ((this.speed) < 200) {
      this.speed += 5;
    }
  }
  brake() {
    if ((this.speed) > 0) {
      this.speed -= 5
    }
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

Cars[0].displayInfo();
Cars[1].displayInfo();
Cars[0].go();
Cars[0].go();
Cars[0].go();
Cars[0].brake();
Cars[0].displayInfo();


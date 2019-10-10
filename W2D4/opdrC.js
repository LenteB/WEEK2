// C. getBrand is niet meer verbonden aan het object car

//2.D: undefined, this is niet verbonden met het object. 
// 2d2: this is nu wel verbonden aan het object car

const car = {
    brand: "Nissan",
    getBrand: function(){
        console.log(this.brand);
      }};

      getCarBrand = car.getBrand.bind(car)
      console.log(getCarBrand);

      
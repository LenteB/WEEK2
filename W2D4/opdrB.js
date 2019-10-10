const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand(); 

  //verwachte output: Nissan omdat getBrand nu verbonden is aan het object car
  //output: ^
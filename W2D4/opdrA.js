const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
  const getCarBrand = car.getBrand;
   
  getCarBrand();

  //verwachte output: Nissan
  //output: undefined
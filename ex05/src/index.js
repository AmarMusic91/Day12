myPetsArray = [
    {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
    },
    {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
    },
    {
      animalType: ["Dog", "Cat", "Bird"],
      name: ["Pujdo", "Maca", "Tweety"],
    },
  ];
  function myPetsFunction(pets) {
    return pets[1].name[1];
  }
  console.log(myPetsFunction(myPetsArray));
  module.exports = myPetsFunction;
  module.exports.myPets = myPetsArray;

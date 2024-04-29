//The func name has to be Capital
function BellBoy(name, age, workPermit, language) {
  this.name = name;
  this.age = age;
  this.workPermit = workPermit;
  this.language = language;
}

function HouseKeeper(name, age, siteOfwork, language) {
  this.name = name;
  this.age = age;
  this.siteOfwork = siteOfwork;
  this.language = language;
}

var housekeeper1 = new HouseKeeper('Fardan', 22, 'lobby', [
  'Bangla',
  'English',
  'Hindi',
]);
housekeeper1.name = 'Gyatt';
console.log(housekeeper1);

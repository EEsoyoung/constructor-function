/*export default*/ function soyoung (name,age,adress,tel){
  if(typeof(name) === "string"
  && typeof(age)=== "number"
  && typeof(adress) ==="string"
  && typeof(tel) === "number"){
    this.name = name;
      this.age = age;
      this.adress = adress;
      this.tel = tel;
    }
}
const soyoungLee = new soyoung("이소영", 20, "대전", 0101234567 );
console.log(soyoungLee);

// function kdt (name ,glass,paymant){
//   this.id = name;
//   this.b = glass;
//   this.c = paymant;
//   this.func = function(){

//   }
//}
// const soyoung = new kdt ('팥','슈크림','피자');
// console.log(typeof(soyoung));
// console.log(soyoung);
//1~20까지난수 
const randomData = [];
//랜덤숫자 20개 받아서 randomData 배열에 넣어줌
for(let i = 0; i < 20; i++){
  const random = Math.floor(Math.random() * 20)+1;
  randomData.push(random);
}
// console.log(randomData)
//랜덤 배열에서 중복을 없앤 값을 배열에넣어줌
const answer = [];
randomData.forEach((item)=>{
  if(!answer.includes(item)){ //answer 에 item 값이있는지 확인하고 없으면 
    answer.push(item); // 값을 넣어준다.
  }
});
// console.log(answer)
//중복을 없앤 배열에서 값을 3개 복사해옴
const inputData = answer.slice(0,3);
console.log(inputData);

// let result = 0;
// inputData.forEach((num)=>{
//   result +=num;
// });
// console.log(result)

const result = inputData.reduce((prev,cur)=>{
  return prev + cur/inputData.length;
})
console.log(result)

if (result < 10){
  console.log('under');
} else if (result >= 10){
  console.log('over');
}

function obj(num1,num2,num3){
  this.first = num1,
  this.second = num2,
  this.third = num3
}

const objectData = new obj(inputData[0],inputData[1],inputData[2]);
console.log(objectData)

// const objectData = Object.assign({},inputData);
// console.log(objectData)









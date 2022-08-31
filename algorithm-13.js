//1~20까지난수 
const inputData = [];
//랜덤숫자 20개 받아서 inputData 배열에 넣어줌
for(let i = 0; i < 20; i++){
  const random = Math.floor(Math.random() * 20)+1;
  inputData.push(random);
}
console.log(inputData)
//랜덤 index 숫자 받아오는 배열 
const answer = [];
for(let i = 0; i < 20; i++){
  const randomIndex = Math.floor(Math.random());
  answer.push(inputData[randomIndex]);
  inputData.splice(randomIndex,1);
}
console.log(answer)



function average(arr){
  let total = 0;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    total = sum/arr.length;
  }
  return total;
}
average(inputData);


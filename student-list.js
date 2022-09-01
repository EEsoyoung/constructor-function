const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

function list (id,name){
  this.id = id;
  this.name = name;
}

// const student = new list(1,'이소영');
// console.log(student)

// for(let i = 0; i < studentList.length; i++){
//   const student = new list(i+1,studentList[i])
//   console.log(student);
// };



studentList.forEach((name,id)=>{
  const student = new list (id+1,name)
  console.log(student);
  // listObject.push()
});

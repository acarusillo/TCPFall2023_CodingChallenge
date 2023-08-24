document.addEventListener("DOMContentLoaded", function() {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  
  const changeBox1Btn = document.getElementById("changeBox1");
  const changeBox2Btn = document.getElementById("changeBox2");
  const changeBox3Btn = document.getElementById("changeBox3");
  const changeAllBtn = document.getElementById("changeAll");
  
  changeBox1Btn.addEventListener("click", function() {
    box1.style.backgroundColor = "orange";
    box1.style.borderColor = "purple";
  });
  
  changeBox2Btn.addEventListener("click", function() {
    box2.style.backgroundColor = "yellow";
    box2.style.borderColor = "green";
  });
  
  changeBox3Btn.addEventListener("click", function() {
    box3.style.backgroundColor = "pink";
    box3.style.borderColor = "red";
  });
  
  changeAllBtn.addEventListener("click", function() {
    box1.style.backgroundColor = "cyan";
    box1.style.borderColor = "blue";
    box2.style.backgroundColor = "cyan";
    box2.style.borderColor = "blue";
    box3.style.backgroundColor = "cyan";
    box3.style.borderColor = "blue";
  });
});

  
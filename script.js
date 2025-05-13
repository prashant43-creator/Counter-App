let countValue = document.getElementById("count")
    let increasebtn = document.getElementById("Increase")
    let decreasebtn = document.getElementById("Decrease")
    let resetbtn = document.getElementById("Reset")
    
    let count = 0;
    increasebtn.addEventListener("click",function(){
      count++
      countValue.textContent = count
    })
    decreasebtn.addEventListener("click",function(){
      count--
      countValue.textContent = count
    })
    resetbtn.addEventListener("click",function(){
      count = 0
      countValue.textContent = count
    })
//GET JSON FILE
fetch("./data/FishEyeDataFR.json")
  .then(response => response.json())
  .then(json => console.log(json)); 

//

var photographer = document.querySelector(".photographer");

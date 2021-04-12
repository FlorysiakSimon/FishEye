function showLinktomain(){
    if(window.pageYOffset > 120) {
      document.getElementById("linktomain").style.display = 'block';
    }
    else{
      document.getElementById("linktomain").style.display = 'none';
    }
  }
  document.addEventListener("scroll", showLinktomain);
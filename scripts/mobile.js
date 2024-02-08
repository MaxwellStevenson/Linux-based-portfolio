if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //console.log(navigator.userAgent)
    window.location.href = "./mobile.html";
  } else {
    // Nothing, they are on PC
  }
  
// Prevent right click
document.oncontextmenu = () => {
  alert("Don't try right click");
  return false;
}

/* Still anyone can inspect element by F12 key. view page souce by ctrl + u key. copy by ctrl +c key. Paste by ctrl + v key. let's prevent these */
document.onkeydown = e => {
// document.addEventListener('keydown', (e)=>{
  // Prevent F12 key
  if(e.key == "F12"){
    alert("Don't try to inspect element");
    return false;
  }
  // Prevent it from developer mode
  if(e.keyCode == "123"){
    return false;
  }
  // Prevent showing developer tools by ctrl + shift + i - nhi chlra
  if(e.ctrlKey && e.shiftKey  && e.keyCode == 'I'.charCodeAt(0)){
    alert("Don't try to inspect element");
    return false;
  }
  // Prevent showing console by ctrl + shift + j - nhi chlra
  if(e.ctrlKey && e.keyCode == "16" && e.keyCode == 'J'.charCodeAt(0)){
    console.log("j presses");
    // alert("Don't try to inspect element");
    return false;
  }
  // Prevent showing page source by ctrl + u
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    alert("Don't try to view page sources");
    return false;
  }
  //Prevent copying anything from the page
  if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
    alert("Don't try to copy page element");
    return false;
  }
  // Prevent paste anything from other sources - nhi chlra
  if(e.ctrlkey && e.keyCode == 'V'.charCodeAt(0)){
    alert("Don't try to paste anything to page");
    return false;
  }
}
// });

function increaseFont(id,increaseCount){
  textToIncrease=document.getElementById(id);
  property=window.getComputedStyle(textToIncrease,null).getPropertyValue('font-size');
  currentsize=parseFloat(property);
  textToIncrease.style.fontSize=(currentsize+increaseCount)+'px';
  }





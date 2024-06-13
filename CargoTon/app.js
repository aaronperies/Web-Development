let slideNo = 1;
showSlides(slideNo);

function nextSlide(num){
    showSlides(slideNo += num)
}

function prevSlide(num){
    showSlides(slideNo = num)
}

function showSlides(num){
    let i;
    let slideArray = document.getElementsByClassName("slider-image");

    if(num > slideArray.length){
        slideNo = 1
    }

    if(num < 1){
        slideNo = slideArray.length
    }

    for(i = 0; i < slideArray.length; i++){
        slideArray[i].style.display = "none";
    }
    slideArray[slideNo - 1].style.display = "block";
}

function showPointOne(){
    var div = document.getElementByClassName("point-1-para");
    
    if (div.style.display === "none"){
        div.style.display = "block";
    } else{
        div.style.display = "none";
    }
}
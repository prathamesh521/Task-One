var slideIndex = 1;
slider(slideIndex);

function slider(){
    var i;
    var reviews = document.getElementsByClassName("review1");
    var dots = document.getElementsByClassName("dot");

    
    for (i = 0; i < reviews.length; i++){
        reviews[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > reviews.length){
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    reviews[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";

    setTimeout(slider,3000)
}
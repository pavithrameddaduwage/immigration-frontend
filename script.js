
var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function() {
if(btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar').classList.add('sidebarshow');
    btnst = false;
}else if(btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar').classList.remove('sidebarshow');
    btnst = true;
}
}

$('.carouselSection').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
});







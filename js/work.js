document.addEventListener('click', function(e) {
    if (e.target.matches('a[href="#"]')) {
        e.preventDefault();
    }
});

function preAlarm(e){
    alert("준비중입니다.");
    e.preventDefault();
}

//menubar menuopen, nav 사라짐
let gnbOpen = document.querySelector('.gnb .gnb_open');
document.querySelector('.gnb .gnb_open_btn').addEventListener('click',function(){
    gnbOpen.classList.add('on');
});
document.querySelector('.gnb .gnb_open .gnb_close').addEventListener('click',function(){
    gnbOpen.classList.remove('on');
});

const footerImg = document.getElementById('footerImg');
/**푸터에서 프로필이미지 변경 width 576px 이하 */
function changeImg_footer(){
    footerImg.src='img/profile_footer.png';
    footerImg.transition="all 1s ease";
}
function restoreImg_footer() {
    footerImg.src = "img/profile_footer_black.png";
    footerImg.transition="all 1s ease";
}

footerImg.addEventListener('touchstart',changeImg_footer());
footerImg.addEventListener('touchmove',changeImg_footer());
footerImg.addEventListener('touchend', restoreImg_footer());
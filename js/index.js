//menubar menuopen, nav 사라짐
let gnbOpen = document.querySelector('.gnb .gnb_open');
document.querySelector('.gnb .gnb_open_btn').addEventListener('click',function(){
    gnbOpen.classList.add('on');
});
document.querySelector('.gnb .gnb_open .gnb_close').addEventListener('click',function(){
    gnbOpen.classList.remove('on');
})



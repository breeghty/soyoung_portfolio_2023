document.addEventListener('click', function(e) {
    if (e.target.matches('a[href="#"]')) {
        e.preventDefault();
        
    }
});

function preAlarm(e){
    alert("준비중입니다.");
    e.preventDefault();
}
/**모바일 브라우저에서 100vh 오류 해결 */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);
//resize
window.addEventListener('resize',()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
});

//menubar menuopen, nav 사라짐
let gnbOpen = document.querySelector('.gnb .gnb_open');
document.querySelector('.gnb .gnb_open_btn').addEventListener('click',function(){
    gnbOpen.classList.add('on');
});
document.querySelector('.gnb .gnb_open .gnb_close').addEventListener('click',function(){
    gnbOpen.classList.remove('on');
});

/*클릭하면 해당 영역으로 부드럽게 스크롤하여 이동하기*/
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElem = document.querySelector(targetId);
    const targetOffset = targetElem.offsetTop;
    window.scroll({
        top: targetOffset,
        behavior: 'smooth'
    });
}

/*스크롤하면 해당 영역 nav link active*/

const sectionLink = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav li a');
//console.log(`섹션의 개수는 ${sectionLink.length}`);
//console.log(`nav li a의 개수는 ${navLink.length}`);

//섹션의 위치값을 저장
let section_ab = sectionLink[0].offsetTop;
let section_sk = sectionLink[1].offsetTop;
let section_wr = sectionLink[2].offsetTop;
let section_lg = sectionLink[3].offsetTop;
let section_cm = sectionLink[4].offsetTop;
let footer_top = document.querySelector('footer').offsetTop;
const header = document.querySelector('header');

/*active 된 nav li a의 active 클래스 해제*/ 
function nav_active_reset(){
    for(let k=0;k<navLink.length;k++){
        navLink[k].classList.remove('active');
    }
}
/*스크롤 이벤트에 대한 핸들러 함수*/
function handleScrollEvent() {
    /*스크롤 위치값 변수*/
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // // 리사이즈 이벤트가 끝나면 페이지를 새로고침하도록 설정
    // let delay = 300;
    // let timer = null;
    // if (window.innerWidth > 500) {
    //     window.addEventListener('resize', function() {
    //         clearTimeout(timer);
    //         timer = setTimeout(function() {
    //             location.reload();
    //         }, delay);
    //     });
    // }

    // // 현재 스크롤 위치를 저장하여 페이지를 새로고침했을 때 이 위치로 이동하도록 설정
    // history.scrollRestoration = "auto";
    //main
    if(0<=scrollTop && scrollTop<section_ab){
        nav_active_reset();
    }
    // section_about
    if (scrollTop >= section_ab) {
        nav_active_reset();
        navLink[0].classList.add('active');
        header.style.display = 'block';
    }
    // section_skill
    if (scrollTop >= section_sk) {
        nav_active_reset();
        navLink[1].classList.add('active');
        header.style.display = 'block';
    }
    // section_work
    if (scrollTop >= section_wr) {
        nav_active_reset();
        navLink[2].classList.add('active');
        header.style.display = 'block';
    }
    if(scrollTop >= section_lg){
        nav_active_reset();
        navLink[3].classList.add('active');
        header.style.display = 'block';
    }
    if(scrollTop >= section_cm){
        nav_active_reset();
        navLink[4].classList.add('active');
        header.style.display = 'block';
    }
    if(scrollTop>=footer_top){
        nav_active_reset();
        header.style.display = 'none';
        
    }

}

// 스크롤 이벤트와 리사이즈 이벤트에 대한 핸들러 함수 등록
window.addEventListener("scroll", handleScrollEvent);
window.addEventListener("resize", handleScrollEvent);

// 페이지 로딩시 한번 실행
handleScrollEvent();



/*main 마우스 호버하면 프로필 사진 변경*/ 
const profileImg = document.getElementById('profile_img');

//모바일에서는 프로필이미지 항상 컬러
let mbImg = window.matchMedia('(max-width: 576px)');
if(mbImg.matches == true){
    // 576px이하의 경우
    profileImg.src='img/profile_color.png';
}

function changeImg(){
    profileImg.src='img/profile_color.png';
    innerCursor.classList.add('grow');
    profileImg.transition="all 1s ease";
}
function restoreImg() {
    profileImg.src = "img/profile_black.png";
    innerCursor.classList.remove('grow');
    profileImg.transition="all 1s ease";
    if(mbImg.matches == true){
        // 576px이하의 경우
        profileImg.src='img/profile_color.png';
    }

}


/*skill 섹션 모달창 내용 바꾸기*/
const skillModal = document.querySelector('.skill_modal');
const skillTitle = document.querySelector('.skill_modal_title');
const skillDesc = document.querySelector('.skill_modal_desc');
let btnNum = document.querySelectorAll('.skill_container ul li button');

let skill = [
    {id:0, title:'HTML', desc:'웹표준 준수, 웹접근성 고려한 마크업 <br>시맨틱 태그를 적절한 용도로 사용 <br>SEO 검색엔진 최적화를 위한 메타 태그를 사용<br>웹 사이트의 논리구조를 고려한 직관적인 클래스명 사용'},
    {id:1, title:'CSS', desc:':before, :after, :hover, :focus 등의 가상 선택자 사용<br>@keyframes를 사용한 애니메이션 구현<br>@media query를 사용한 반응형웹 구현<br>디자인을 그대로 화면에 구현하는 능력<br>flex, grid 사용'},
    {id:2, title:'SCSS', desc:'@mixin, @use, @forward를 사용한 레이아웃 재사용 가능<br>nesting으로 유지보수가 쉬운 코드 작성<br>@List와 변수를 사용해 빠르고 효율적인 코드 작성<br>독학으로 포트폴리오 스타일 작성에 SCSS 전처리기 사용'},
    {id:3, title:'Javascript', desc:'vanilla js로 DOM 조작을 통해 UI 개발 가능<br>jQuery, swiper.js, GSAP scrolltriger 등 라이브러리와 플러그인 활용 가능<br>javascript로 포트폴리오 하드코딩<br>동적인 웹 구현 가능<br>for문, 배열, 객체, 함수 문법 활용<br>React 사용 경험 있음'},
    {id:4, title:'Adobe XD', desc:'UI 디자인 가능<br>XD 프로그램으로 아주대학교 병원 사이트 리뉴얼 작업<br>포토샵, 일러스트레이터와 연계작업 능숙<br>프로토타입 기능 사용'},
    {id:5, title:'Figma', desc:'UI 디자인 가능<br>피그마로 포트폴리오 사이트 디자인<br>zeplin, fontawesome 등의 플러그인 활용 가능<br>오토 레이아웃, 컴포넌트 기능 활용<br>프로토타입 기능 사용'},
    {id:6, title:'Photoshop', desc:'사진 편집과 이미지 보정, 펜툴 사용한 포스터 제작<br>UI 디자인 개발 툴과 연계하여 사용<br>GTQ 포토샵 1급 자격증 보유(2023.03)'},
    {id:7, title:'Illustrator', desc:'SVG 이미지 제작<br>펜툴 사용한 일러스트 제작<br>UI 디자인 개발 툴과 연계하여 사용'},
    {id:8, title:'Github', desc:'github와 vs code 연동, 협업 가능<br> 깃허브를 통한 코드 관리<br>깃허브를 통한 웹 호스팅<br>git add, push 등의 터미널 명령어 사용'},
    {id:9, title:'Excel', desc:'컴퓨터 활용능력 2급 자격증 보유(2023.03.03)<br>기본적인 문서 작성과 셀 서식 사용<br>VLOOKUP, INDEX, MATCH 등의 기본함수 사용'},
    {id:10, title:'Notion', desc:'간단한 문서 작성과 일정관리에 사용<br>문서 공유를 통한 일정관리 공유'},
    {id:11, title:'Zeplin', desc:'피그마와 XD에서 만든 UI 디자인을 연동하여 퍼블리싱에 참고해 작업'},
]

/**모달창 열고 닫기 */

// 모달창 열고 누르는 버튼마다 내용 변경하기
for(let n=0;n<btnNum.length;n++){
    document.getElementById(`btn${n+1}`).addEventListener('click',function(){
        skillModal.classList.add('show_modal');
        skillTitle.innerHTML = skill[n].title;
        skillDesc.innerHTML = skill[n].desc;
    });
}
//내가 실제로 누른 게 .skill-modal_container일 때만 모달창 닫기
document.querySelector('html').addEventListener('click',function(e){
    
    if(e.target == skillModal){
        skillModal.classList.remove('show_modal');
    }
});

/*pers_scroll섹션 */
const en_text = document.querySelector('.en_text');
const kr_text = document.querySelector('.kr_text');

let text1 = 'Positive Planning Confident Diligent Cooperative Growing'.split(' ');
let text2 = '긍 정 계 획 자 신 감 성 실 함 협 력 성 장 꾸 준 함 책 임 감'.split(' ');

// 문자열을 split 메소드를 이용해 나눠준다. 스페이스바를 기준으로 단어 네개가 나눠지고 text1 배열이 생성된다.
// text1=['passionate', 'Growing', 'Receptive', 'Challengin']


// for(let i = 0; i < text1.length ; i++){
//     console.log(text1[i]);
// }

function initText(e, array){
    array.push(...array)
    array.push(...array)
    // 스크롤시 단어가 이어지면서 나와야 하므로 ...array를 이용해 배열의 단어를 한 번 더 넣어준다.
    // console.log(array);
    for(let i = 0; i<array.length; i++){
        e.innerText += `${array[i]}\u00A0\u00A0\u00A0\u00A0`;
    }
}
// innerText => 요소 내부의 텍스트를 나타내는 메소드.

initText(en_text, text1);
initText(kr_text, text2);


// 전역변수
let count1 = 0;
let count2 = 0;


function marqueeText(count, element, dir){
    if(count > element.scrollWidth / 2){
        element.style.transform = 'translate3d(0,0,0)';
        count=0;
    }
    element.style.transform = `translate3d(${dir * count}px, 0, 0)`;
    // x축 방향으로 count * direction 만큼 이동. direction이 양수면 오른쪽, 음수면 왼쪽으로 이동한다.
    
    return count
}

function animate(){
    // 반응형에 따라 텍스트 애니메이션 속도 다르게 하기.
    let mediaSize = window.matchMedia('(max-width: 1000px)');
    if(mediaSize.matches == true){
        // 1000px이하의 경우
        count1++;
        count2++;
    } else{
        count1+=2;
        count2+=2;
    }

    // ccount를 통해 속도 조절. count를 계속 up 시키다가 marqueeText 함수를 통해 초기화.
    //애니메이션 무한 반복.

    count1 = marqueeText(count1, en_text, -1);
    count2 = marqueeText(count2, kr_text, 1);

    window.requestAnimationFrame(animate);
    
    // 애니메이션의 현재상태를 업데이트하는 메소드.
}

animate();

function scrollMarquee(){

    let mediaSize = window.matchMedia('(max-width: 1000px)');
    if(mediaSize.matches == true){
        count1+=5;
        count2+=5;
    } else{
        count1+=10;
        count2+=10;
    }
}

window.addEventListener('scroll', scrollMarquee);


/*work gallery_img slider */

/*버튼 누르면 해당 슬라이드로 이동*/
let num= 1;
let move_x;
const slideBox = document.getElementById('slideBox');
const slideBtn = document.querySelectorAll('.slideBtn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
/*console.log(slideBtn.length);*/

for(let i = 1;i<=slideBtn.length;i++){
    document.querySelector(`.slide-${i}`).addEventListener('click',function(){
        move_x = -100*i + 100;
        slideBox.style.transform = `translateX(${move_x}vw)`;
        slideBox.style.transition = 'all 1s ease';
            num=i;
            console.log(`${i}번 슬라이드입니다.`);
        });
}
/** 슬라이드 다음버튼*/
nextBtn.addEventListener('click', function() {
    if(num==10){
        alert("마지막 슬라이드입니다. 1번 슬라이드로 되돌아갑니다.")
        slideBox.style.transform = 'translateX(0vw)';
        slideBox.style.transition = 'none';
        num=1;

    }else{
        slideBox.style.transform = `translateX(-${num * 100}vw)`;
        slideBox.style.transition = 'all 1s ease';
        num++;
    }
});

/*이전버튼*/
prevBtn.addEventListener('click', function() {
    if(num==1){
        alert("맨 처음 슬라이드입니다. 10번 슬라이드로 되돌아갑니다.");
        slideBox.style.transform = 'translateX(-900vw)';
        slideBox.style.transition = 'none';
        num=10;
    }
    else{
        
        slideBox.style.transform = `translateX(-${(num-2) * 100}vw)`;
        slideBox.style.transition = 'all 1s ease';
        num--;
    }
});

/** 이미지 슬라이더 스와이퍼 기능*/
const slideNum = document.querySelectorAll('.slide-box');
let startPoint = 0;
let isClick = false;


slideNum[0].addEventListener('mousedown', function(e) {
  // 마우스 누를 때 발생하는 이벤트 mousedown
    startPoint = e.clientX;
  // console.log(e.clientX);
    isClick = true;
});

slideNum[0].addEventListener('mousemove', function(e) {
    // console.log(e.clientX - startPoint);
    if (isClick) {
    slideBox.style.transform = `translateX(${e.clientX - startPoint}px)`;
    }
});

slideNum[0].addEventListener('mouseup', function(e) {
    isClick = false;
    if ((startPoint - e.clientX) >= 250) {
        slideBox.style.transform = 'translateX(-100vw)';
        num++;
    } else {
        slideBox.style.transform = 'translateX(0vw)';
    }
});

/** mobile 환경_touch slider에 터치한 경우 스와이퍼 기능*/
slideNum[0].addEventListener('touchstart', function(e) {
    startPoint = e.touches[0].clientX;
    // console.log(e.clientX);
    isClick = true;
});

slideNum[0].addEventListener('touchmove', function(e) {
    // console.log(e.clientX - startPoint);
    if (isClick) {
    slideBox.style.transform = `translateX(${e.touches[0].clientX - startPoint}px)`;
    }
});

slideNum[0].addEventListener('touchend', function(e) {
    isClick = false;
    if ((startPoint - e.changedTouches[0].clientX) >= 100) {
        slideBox.style.transform = 'translateX(-100vw)';
        num++;
    } else {
        slideBox.style.transform = 'translateX(0vw)';
    }
});





// Comment swiper.js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    autoplay: {
        delay: 5500,
        disableOnInteraction: true,//스와이프 후 자동재생.
    },
    loop:false,
    spaceBetween: 50,
    centeredSlides: true,
    breakpoints:{
        //1720px보다 클 경우
        1720:{
            slidesPerView: 2,
            spaceBetween: 150,
        },
        1000:{
            slidesPerView: 2,
        },
        767:{
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
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
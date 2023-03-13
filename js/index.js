
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
let observer = new IntersectionObserver((e)=>{
    e.forEach((section,n)=>{
        if(section.isIntersecting){
            navLink[0].classList.add('active');
        }else{
            navLink[0].classList.remove('active');
        }
        // box.intersectionratio//화면에 해당 요소가 몇 퍼센트 보이는지 표시해준다.
    })
});
observer.observe(sectionLink[0]);
observer.observe(sectionLink[1]);


/*main 마우스 호버하면 프로필 사진 변경*/ 
const profileImg = document.getElementById('profile_img');
function changeImg(){
    profileImg.src='img/profile_color.png';
    profileImg.transition="all 1s ease";
}
function restoreImg() {
    profileImg.src = "img/profile_black.png";
    profileImg.transition="all 1s ease";
}

/*skill 섹션 모달창 내용 바꾸기*/


/*pers_scroll섹션 */
const en_text = document.querySelector('.en_text');
const kr_text = document.querySelector('.kr_text');

var text1 = 'Positive Planning Confident Diligent Cooperative Growing'.split(' ');
var text2 = '긍 정 계 획 자 신 감 성 실 함 협 력 성 장 꾸 준 함 책 임 감'.split(' ');

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
/*다음버튼*/
nextBtn.addEventListener('click',function(){
    if(num==1){
        slideBox.style.transform = 'translateX(-100vw)';
        num=2;
    }else if(num==2){
        slideBox.style.transform = 'translateX(-200vw)';
        num=3;
    }else if(num==3){
        slideBox.style.transform = 'translateX(-300vw)';
        num=4;
    }else if(num==4){
        slideBox.style.transform = 'translateX(-400vw)';
        num=5;
    }else if(num==5){
        slideBox.style.transform = 'translateX(-500vw)';
        num=6;
    }else if(num==6){
        slideBox.style.transform = 'translateX(-600vw)';
        num=7;
    }else if(num==7){
        slideBox.style.transform = 'translateX(-700vw)';
        num=8;
    }else if(num==8){
        slideBox.style.transform = 'translateX(-800vw)';
        num=9;
    }else if(num==9){
        slideBox.style.transform = 'translateX(-900vw)';
        num=10;
    }else if(num ==10){
        slideBox.style.transform = 'translateX(0vw)';
        num=1;
    }
    slideBox.style.transition = 'all 1s ease';
    
});
/*이전버튼*/
prevBtn.addEventListener('click',function(){
    if(num==1){
        slideBox.style.transform = 'translateX(-900vw)';
        num=10;
    }else if(num==2){
        slideBox.style.transform = 'translateX(0vw)';
        num=1;
    }else if(num==3){
        slideBox.style.transform = 'translateX(-100vw)';
        num=2;
    }else if(num==4){
        slideBox.style.transform = 'translateX(-200vw)';
        num=3;
    }else if(num==5){
        slideBox.style.transform = 'translateX(-300vw)';
        num=4;
    }else if(num==6){
        slideBox.style.transform = 'translateX(-400vw)';
        num=5;
    }else if(num==7){
        slideBox.style.transform = 'translateX(-500vw)';
        num=6;
    }else if(num==8){
        slideBox.style.transform = 'translateX(-600vw)';
        num=7;
    }else if(num==9){
        slideBox.style.transform = 'translateX(-700vw)';
        num=8;
    }else if(num==10){
        slideBox.style.transform = 'translateX(-800vw)';
        num=9;   
    }
    slideBox.style.transition = 'all 1s ease';
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
            slidesPerView: 3,
        },
        767:{
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

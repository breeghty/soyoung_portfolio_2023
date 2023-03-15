/** cursor style*/
let innerCursor = document.querySelector('.inner-cursor');
// let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x,y);

    innerCursor.style.left=x+'px';
    innerCursor.style.top=y+'px';
    // outerCursor.style.left=x+'px';
    // outerCursor.style.top=y+'px';
}

let links = Array.from(document.querySelectorAll('a'));
let btnSk = Array.from(document.querySelectorAll('.skill_container ul li .btn'));

links.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow');
    });
    link.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('grow');
    });
});

btnSk.forEach((btn)=>{
    btn.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow');
    });
    btn.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('grow');
    });
});

let gnbs = Array.from(document.querySelectorAll('.gnb_open .gnb_open_list li a'));
// console.log(gnbs);
gnbs.forEach((gnb_li)=>{
    gnb_li.addEventListener('mouseover',()=>{
        innerCursor.classList.add('gnb');
    });
    gnb_li.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('gnb');
    });
})
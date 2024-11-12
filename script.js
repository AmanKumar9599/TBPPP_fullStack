let login_btn=document.querySelector('#login-btn');
let signup_btn=document.querySelector('#signup-btn');
let signup_form=document.querySelector('#signup-form');
let login_form=document.querySelector('#login-form');
// changing login and signup form
signup_btn.addEventListener('click',()=>{
    login_btn.style.color='#4a90e2'
    signup_btn.style.color='#f06'
    signup_form.classList.remove('hidden');
    login_form.classList.add('hidden');
});

login_btn.addEventListener('click',()=>{
    signup_btn.style.color='#4a90e2'
    login_btn.style.color='#f06'
    login_form.classList.remove('hidden');
    signup_form.classList.add('hidden');
});

let user_btn=document.querySelector('#user-btn');
let agent_btn=document.querySelector('#agent-btn');

user_btn.addEventListener('click',()=>{
    agent_btn.style.color='rgb(50, 50, 50)';
    agent_btn.style.backgroundColor='rgb(144, 146, 148)';
    user_btn.style.color='white';
    user_btn.style.backgroundColor='#4a90e2';
});

agent_btn.addEventListener('click',()=>{
    user_btn.style.color='rgb(50, 50, 50)';
    user_btn.style.backgroundColor='rgb(144, 146, 148)';
    agent_btn.style.color='white';
    agent_btn.style.backgroundColor='#4a90e2';
});

const slides=document.querySelectorAll('.slider');
let count=0;
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
});


const slideimage=()=>{
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(-${count*100}%)`;
    })
}

function goNext(){
    count++;
    if(count>=2){
        right.style.display='none';
    }
    if(count>=1){
        left.style.display='block';
    }
    else{
        left.style.display='none';
    }
    slideimage();
}
function goPrev(){
    count--;
    if(count<=0){
        left.style.display='none';
    }
    if(count<=2){
        right.style.display='block';
    }
    
    slideimage();
}
const right=document.getElementById('ic1');
const left=document.getElementById('ic2');

right.addEventListener('click',()=>{
    goNext();
});

left.addEventListener('click',()=>{
    goPrev();
})


// when we click on the button
function toggleHide() {
    let btn =document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display=='none')
    {
        para.style.display='block';
    }
    else{
        para.style.display='none';
    }
}
// use of event listeners
let para = document.getElementById('para');
para.addEventListener('mouseover',function run(){
    // alert('mouse on the para');
    console.log('mouse on para');
})
para.addEventListener('mouseout',function run(){
    console.log('mouse off para');  
})



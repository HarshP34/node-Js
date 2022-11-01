const Open=document.getElementById('open');

const Close=document.getElementById('close');

const Container=document.getElementById('container');


Open.addEventListener('click',()=>{
  Container.classList.add('active');
})

Close.addEventListener('click',()=>{
  Container.classList.remove('active');
})
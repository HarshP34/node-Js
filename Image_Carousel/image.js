const img=document.querySelectorAll('#image');
const imgs=document.getElementById('images');
console.log(imgs);
let index=0;

function run()
{
    index++;
    if(index>img.length-1)
    {
        index=0;
    }
    imgs.style.transform=`translateX(${-index*320}px)`;
}

setInterval(run,2000);
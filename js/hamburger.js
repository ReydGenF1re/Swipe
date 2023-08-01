document.addEventListener("DOMContentLoaded", function (){
    document.getElementById('burger').addEventListener('click',function (){
        document.querySelector('.navbar').classList.toggle('open');
    })
})
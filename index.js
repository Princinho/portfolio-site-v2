document.getElementById('nav-toggle').addEventListener('click',()=>{
    document.body.classList.toggle('visible-nav')
})

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',hideNav)
});
function hideNav(){
    document.body.classList.remove('visible-nav')
    console.log('hiding nav')
}
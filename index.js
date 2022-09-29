document.getElementById('nav-toggle').addEventListener('click',()=>{
    document.body.classList.toggle('visible-nav')
})
document.getElementById('main').addEventListener('click',()=>{
    hideNav()
})
document.getElementById('home').addEventListener('click',()=>{
    hideNav()
})
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click',hideNav)
});
function hideNav(){
    document.body.classList.remove('visible-nav')
    console.log('hiding nav')
}
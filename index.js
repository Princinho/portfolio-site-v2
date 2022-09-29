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
window.addEventListener('scroll',ev=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
        document.getElementById('scroll-down-indicator').style.visibility='hidden'
    }else{
        document.getElementById('scroll-down-indicator').style.visibility='visible'
    }
})
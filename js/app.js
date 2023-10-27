window.addEventListener('load',()=>{
    body = document.querySelector('body')
    body.style.display = 'block';
})

const moonSection = document.getElementsByClassName('intro-moon')[0]
let articles = document.getElementsByClassName('articles')
moonSection.addEventListener('click', ()=>{
    moonSection.classList.add('scale-and-fade')

    for(let i = 0; i<articles.length; i++){
        articles[i].classList.remove('hidden')
    }
})


const observer = new IntersectionObserver( (entries)=>{
    entries.forEach((entry)=>{

        let h1 = entry.target.children[0].children[0]
        let div = entry.target.children[0].children[1]
        
        if(entry.isIntersecting){
            entry.target.classList.add('scrollIn')
            h1.classList.add('animate_heading')
            div.classList.add('animate_paragraph')            
            
        } 
        else{
            entry.target.classList.remove('scrollIn')
            h1.classList.remove('animate_heading')
            div.classList.remove('animate_paragraph')
        } 
    })
})

for(let i = 0; i<articles.length; i++){
    observer.observe(articles[i])
}
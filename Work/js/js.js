let che = document.querySelector('.spic');
let cheLi = document.querySelectorAll('.spic>li');
let cheaContainer = document.querySelectorAll('.spic__content');
console.log(document.querySelectorAll('.spic>li:before'))
cheLi.forEach(item=>{
    item.addEventListener('click',()=>{
        let spicItem = item.getAttribute('data-spic')
        for(let i = 0; i<cheaContainer.length;i++){
           let element = cheaContainer[i].getAttribute('data-spic') ;
           if(spicItem == element ){
            if(cheaContainer[i].style.display == 'block'){
                cheaContainer[i].style.display = 'none';
                cheaContainer[i].previousElementSibling.classList.add('spice__deactive')
                cheaContainer[i].previousElementSibling.classList.remove('spice__active')
            }else{
                cheaContainer[i].style.display = 'block';
                cheaContainer[i].previousElementSibling.classList.add('spice__active')
                cheaContainer[i].previousElementSibling.classList.remove('spice__deactive')
            }
                
           }
        }
    })
})
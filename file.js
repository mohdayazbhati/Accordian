
let itemdiv = document.getElementsByClassName('item')
let iconClose = document.getElementsByClassName('iconClose')
let iconOpen = document.getElementsByClassName('iconOpen')
for(let i=0 ; i<itemdiv.length ; i++){
    iconClose[i].style.display = 'none'
    itemdiv[i].addEventListener('click',(e)=>{
      const result = itemdiv[i].classList.toggle('active')
      if(result){
        iconClose[i].style.display = 'block'
        iconOpen[i].style.display = 'none'
      }else{
        iconClose[i].style.display = 'none'
        iconOpen[i].style.display = 'block'
      }

    })
}

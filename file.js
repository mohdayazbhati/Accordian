// const ourItemDiv = document.getElementsByClassName("item");
// const openIcon = document.getElementsByClassName("iconOpen");
// const closeIcon = document.getElementsByClassName("iconClose");

// // console.log(ourItemDiv);

// for (let i = 0; i < ourItemDiv.length; i++) {
//   closeIcon[i].style.display = "none";

//   ourItemDiv[i].addEventListener("click", () => {
//     const result = ourItemDiv[i].classList.toggle("active");

//     if (result) {
//       closeIcon[i].style.display = "block";
//       openIcon[i].style.display = "none";
//     } else {
//       closeIcon[i].style.display = "none";
//       openIcon[i].style.display = "block";
//     }
//   });
// }
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

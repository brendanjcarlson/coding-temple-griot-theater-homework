const navToggler=document.querySelector(".nav__primary__toggle"),navList=document.querySelector(".nav__primary__list");function toggleNav(i){i.preventDefault(),"hidden"===navList.style.visibility?navList.style.visibility="visible":navList.style.visibility="hidden"}navToggler.addEventListener("click",toggleNav);
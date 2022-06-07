const footer = document.querySelector('.footerContent')
fetch('./footerContent.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})
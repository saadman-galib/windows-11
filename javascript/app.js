let windows = document.querySelector('#taskbar-img-1')
let startmenu = document.querySelector('.startmenu')

windows.addEventListener('click', ()=> {
    console.log('Hi')
    if (startmenu.style.bottom == "60px"){
        startmenu.style.bottom = "-650px"
    }

    else{
        startmenu.style.bottom = "60px"
    }
})
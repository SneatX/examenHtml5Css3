function mostrarObtener(){
    document.getElementById("navBar").classList.add("oculto")
    document.getElementById("cardObtener").classList.remove("oculto")
    document.getElementById("cardObtener").classList.add("displayFlex")

}

document.getElementById("cerrarObtener").addEventListener("click" , e =>{
    document.getElementById("navBar").classList.remove("oculto")
    document.getElementById("cardObtener").classList.add("oculto")
    document.getElementById("cardObtener").classList.remove("displayFlex")
})

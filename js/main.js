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


document.getElementById("btnDesplegarMenu").addEventListener("click" , e =>{
    let lista = document.getElementById("listaDesplegable")

    if(lista.classList.contains("oculto")){
        lista.classList.remove("oculto")
        console.log("h")
    }else{
        lista.classList.add("oculto")
    }
})
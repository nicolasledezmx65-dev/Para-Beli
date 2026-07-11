const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    pages[index].classList.add("active");
}

document.querySelectorAll(".next").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage < pages.length-1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

document.querySelectorAll(".prev").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage > 0){

            currentPage--;

            showPage(currentPage);

        }

    });

});

showPage(currentPage);

// Música

const audio = document.getElementById("musica");

const boton = document.getElementById("playMusic");

let reproduciendo = false;

boton.addEventListener("click",()=>{

    if(!reproduciendo){

        audio.play();

        boton.innerHTML="⏸️ Pausar música";

        reproduciendo=true;

    }else{

        audio.pause();

        boton.innerHTML="🎵 Reproducir nuestra canción";

        reproduciendo=false;

    }

});
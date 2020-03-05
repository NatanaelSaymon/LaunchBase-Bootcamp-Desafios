/* Variaveis */
const modalOverlay = document.querySelector('.modal-overlay')

const cursos = document.querySelectorAll('.container-cursos')

const modal = document.querySelector('.modal')

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const cursoId = curso.getAttribute('id') /*Pega pelo atributo id*/
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src=`https://rocketseat.com.br/${cursoId}`
    })
}

/*Function de maximizar modal*/
document.querySelector('.maximize-modal').addEventListener("click", function(){
    if(modal.classList.contains('active-maximize')){
        modal.classList.remove('active-maximize')
    } else {
        modal.classList.add('active-maximize')
    }
})

/*Function de fechar modal*/
document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src=""
})


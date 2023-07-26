/* EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto
  alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della 
  pagina, automaticamente.*/

window.onload = function () {
     document.querySelector('aside div:last-child li:nth-child(2)').remove();
}

/*EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento 
  padre dal DOM cliccando sul link "Continua a leggere".*/

  const contLegg = document.querySelectorAll(".col-md-6 a")
  for (const c of contLegg) {    
      c.addEventListener("click", function(event) {
          event.target.closest(".col-md-6").remove()
      })
    }
  
/*EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore 
  ogni volta che il cursore passa sopra l'autore del post.*/

  const writers = document.querySelectorAll("p.blog-post-meta a")
  for (const writer of writers) {    
    writer.addEventListener("mouseover", function(event){
        alert(event.target.innerText)
    })
  }
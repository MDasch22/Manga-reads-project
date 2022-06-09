window.addEventListener("DOMContentLoaded", async (event)=>{

    const bookshelf = document.querySelector(".book-shelf")

    bookshelf.addEventListener("change", async (event)=>{
        console.log("here")
        const option = {
            header: {"Content-Tpye": "application/json"},
            method: "POST",
        }
        const response = await fetch(`/mangas/${event.target.id}/${event.target.value}`, option);
        const res = await response.json();
    })
});

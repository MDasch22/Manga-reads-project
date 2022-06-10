window.addEventListener("DOMContentLoaded", async (event)=>{

    const bookShelves = document.querySelectorAll(".delete-currentlyReading")

    for(let i=0; i< bookShelves.length; i++){

        bookShelves[i].addEventListener("click", async (event)=>{

            const userId = event.target.id.split('-')[0]
            const bookshelfId = event.target.id.split('-')[1]
            const option = {
                header: {"Content-Tpye": "application/json"},
                method: "POST",
            }
            const res = await fetch(`/users/${userId}/bookshelves/${bookshelfId}/delete`, option);
            const data = await res.json();
            if(data.message==="Success!"){
                const shelf = document.getElementById(`${userId}-${bookshelfId}`)
                shelf.remove()
            }
        })
    }
});

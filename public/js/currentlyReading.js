window.addEventListener("DOMContentLoaded", async (event)=>{

    const bookshelf = document.querySelector(".delete-currentlyReading")


    bookshelf.addEventListener("click", async (event)=>{
        console.log("here")
        const userId = event.target.id.split('-')[0]
        const bookshelfId = event.target.id.split('-')[1]
        const option = {
            header: {"Content-Tpye": "application/json"},
            method: "POST",
        }
        const res = await fetch(`/users/${userId}/bookshelves/${bookshelfId}/delete`, option);
        const data = await res.json();
        if(data.message==="Success!"){
            s
        }
    })

});

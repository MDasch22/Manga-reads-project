window.addEventListener("DOMContentLoaded", async (event)=>{

    const bookShelf = document.querySelectorAll(".delete-wantToRead")

    bookShelf.addEventListener("click", async event=>{
        console.log("here")
        const userId = event.target.id.split('-')[0]
        const bookshelfId = event.target.id.split('-')[1]
        const option = {
            header: {"Content-Tpye": "application/json"},
            method: "POST",
        }
        const index = event.target.id.split('-')[2]
        console.log(userId, bookshelfId, index)
        const response = await fetch(`/users/${userId}/bookshelves/${bookshelfId}/delete`, option);
        const res = await response.json();
    })

});

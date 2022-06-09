window.addEventListener("DOMContentLoaded", async (event)=>{
    const buttonClass = document.querySelector(".delete-wantToRead")

    buttonClass.addEventListener("click", async event=>{
        const userId = event.target.id.split('-')[0]
        const bookshelfId = event.target.id.split('-')[1]
        const option = {
            header: {"Content-Tpye": "application/json"},
            method: "POST",
        }
        const response = await fetch(`/users/${userId}/bookshelves/${bookshelfId}/delete`, option);
        const res = await response.json();
    })
});

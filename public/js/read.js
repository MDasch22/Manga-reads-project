window.addEventListener("DOMContentLoaded", async (event)=>{
    const buttonClass = document.querySelector(".delete-read")

    buttonClass.addEventListener("click", async event=>{
        const option = {
            header: {"Content-Tpye": "application/json"},
            method: "POST",
        }
        const response = await fetch(`/users/${event.target.id}/${event.target.value}`, option);
        const res = await response.json();
    })
});

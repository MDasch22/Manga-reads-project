// const bookshelf = require("../../db/models/bookshelf");

// const btn = document.querySelectorAll('.bs-btn')
// btn.addEventListener("click", (e)=>{

//   window.addEventListener("", event=>{
//       const response = await fetch(`/${e.target.id}/${e.target.value}`);
//         // const { tweets } = await response.json();
//     })

// })

// window.addEventListener("DOMContentLoaded", (e)=>{

//     const bookshelf = document.querySelector("")

//     bookshelf.addEventListener("click", event=>{
//         const option = {
//             header: {"Content-Tpye": "application/json"},
//             method: "POST",
//         }
//         const response = await fetch(`/mangas/${event.target.id}/${event.target.value}`, option);
//         const res = await response.json();
//     })

// })

// var select = document.querySelector("#sel"),
//   input = document.querySelector('input[type="button"]');
// select.addEventListener("change", function (e) {
//   alert("changed");
// });
// input.addEventListener("click", function (e) {
//   select.value = e.target.value;
//   select.dispatchEvent(new Event("change"));
// });

function changeFunc() {
  await fetch(`/mangas/${manga.id}/${bookshelf.id}`)
}

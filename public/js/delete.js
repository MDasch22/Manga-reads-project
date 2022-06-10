window.addEventListener("DOMContentLoaded", async (event) => {

    const bookshelves = document.querySelectorAll(".delete-button")
    for (let i = 0; i < bookshelves.length; i++) {
        bookshelves[i].addEventListener("click", async (event) => {
            const reviewId = event.target.id.split('-')[0];
            const mangaId = event.target.id.split('-')[1];
            const option = {
                header: { "Content-Type": "application/json" },
                method: "POST",
            }
            const res = await fetch(`/mangas/${mangaId}/reviews/${reviewId}/delete`, option);
            const data = await res.json();
            if (data.message === "deleted") {
                const reviews = document.getElementById(`${reviewId}-${mangaId}`)
                reviews.remove()
            }
        })
    };
});

// /:mangaId/reviews/delete/:deleteId\

// '/:mangaId/reviews/:reviewId/delete'

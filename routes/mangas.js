const express = require("express");

const router = express.Router();
const db = require("../db/models");

router.get("/", async(req,res) => {
  console.log("mangas")
  const mangas = await db.Manga.findAll();
  console.log(mangas)
  res.render('mangas', {mangas});
})

// router.get("/:id", async(req,res) => {
//   const manga = await Manga.findByPk(req.params.id);
//   res.render('manga', {manga});
// })

// router.get("/:id/reviews", async(req,res) => {
//   const id = req.params.id
//   const reviews = await Review.findAll({
//     where: { mangaId: id },
//     include: [
//       { model: Manga, as: "manga" },
//       { model: User, as: "user" },
//     ],
//   });
//   res.render('reviews', {reviews});
// })




module.exports = router;

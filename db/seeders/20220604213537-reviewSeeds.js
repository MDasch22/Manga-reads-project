'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: "2",
        mangaId: "1",
        rating: "4",
        comment:"Loved it, would recommend to a friend.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "1",
        rating: "5",
        comment: "One of the best things I've ever read, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "1",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "3",
        rating: "5",
        comment: "One of the best things I've ever read, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "3",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "4",
        rating: "5",
        comment: "GOATED",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "4",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "2",
        rating: "4",
        comment: "Whatta classic would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "5",
        rating: "3",
        comment: "Was a decent read, wouldnt mind recommending to a friend.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "5",
        mangaId: "5",
        rating: "5",
        comment: "One of my all time favorites... would read over and over again. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "5",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "6",
        rating: "5",
        comment: "Chainsaw man was an awesome read, cant wait to read more.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "5",
        mangaId: "6",
        rating: "4",
        comment: "Definetly understand the hype for this manga, awesome read.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "6",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "7",
        rating: "2",
        comment: "Wasn't the best manga I've ever read, story felt fast.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "7",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "5",
        mangaId: "7",
        rating: "3",
        comment: "Was pretty average.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "8",
        rating: "4",
        comment: "Super interesting story so far, excited for more",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "8",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "8",
        rating: "2",
        comment: "Wasn't really was I was into or expecting, still an interesting story though.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "9",
        rating: "4",
        comment: "Cool story, looking forward to read more ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "9",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "9",
        rating: "3",
        comment: "Really cool concept, excited to see where the story goes.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "5",
        mangaId: "10",
        rating: "4",
        comment: "Super cool story and a reall interesting concept. Havent finished yet but I hear the story is amazing. ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "10",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "10",
        rating: "3",
        comment: "Can be a bit exteme at times but other than that the story is awesome.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "11",
        rating: "5",
        comment: "Doesnt get much better than this",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "11",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "11",
        rating: "3",
        comment: "Naruto in my opinion is a bit over hyped but at the same time it isn't a bad story",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "12",
        rating: "5",
        comment: "One of the greatest story's of all time, a MUST read.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "12",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "12",
        rating: "4",
        comment: "Super awesome story and just overall great story telling.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "13",
        rating: "4",
        comment: "Always thought it was intersting how volume 0 has a different protagonist that we follow, but somehow they managed to pull it off perfect.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "13",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "13",
        rating: "3",
        comment: "Average story, looking foward to see how this ties into volume 1 with a differnt MC.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "14",
        rating: "4",
        comment: "Great story, love all story telling.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "14",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "5",
        mangaId: "14",
        rating: "5",
        comment: "One of my favorite manga's of all time, was stocked to see it on this site.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "14",
        rating: "5",
        comment: "Im gonna keep it a bean, one of the GOATS forsure.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "1",
        mangaId: "15",
        rating: "4",
        comment: "Cool concept, Ichigo is a dope character and im excited to see where the series goes.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "15",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "15",
        rating: "2",
        comment: "Was an average manga, nothing to crazy special.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "2",
        mangaId: "16",
        rating: "4",
        comment: "Starts slow but absolutley worth the wait.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        mangaId: "16",
        rating: "5",
        comment: "AWESOME!! Loved the manga, would read again.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "4",
        mangaId: "16",
        rating: "2",
        comment: "Was not impressed, hopefully things start to pick up as story progresses.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};

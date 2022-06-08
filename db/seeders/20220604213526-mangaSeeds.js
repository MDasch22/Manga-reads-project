'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Mangas",
      [
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/518KKkmd1fL._SX329_BO1,204,203,200_.jpg",
          title: "One Piece, Vol. 1: Romance Dawn",
          author: "Eiichiro Oda",
          description: "As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer 'Red-Haired' Shanks. But his life changed when Luffy accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary 'One Piece,' said to be the greatest treasure in the world...",
          genre: "Action/Comedy/Fantasy Fiction",
          releaseDate: "December 24, 1997",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { coverImg: "http://prodimage.images-bn.com/pimages/9781421580364_p0_v2_s1200x630.jpg" ,
          title: "Tokyo Ghoul, Vol. 1" ,
          author: "Sui Ishida ",
          description:
            "Ken Kaneki is an ordinary college student until a violent encounter turns him into the first half-human, half-Ghoul hybrid. Trapped between two worlds, he must survive Ghoul turf wars, learn more about Ghoul society and master his new powers.",
          genre: "Horror/Dark fantasy/Supernatural thriller",
          releaseDate: "February 17, 2012",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81TG8JXmZ9L.jpg",
          title: "Yu Yu Hakusho, Vol. 1" ,
          author: "Yoshihiro Togashi",
          description:
            "Yusuke Urameshi was a tough teen delinquent until one selfless act changed his life...by ending it. When he died saving a little kid from a speeding car, the afterlife didn't know what to do with him, so it gave him a second chance at life. Now, Yusuke is a ghost with a mission, performing good deeds at the beshest of Botan, the spirit guide of the dead, and Koenma, her pacifier-sucking boss from the 'other side.' But what strange things await him on the borderline between life and death?",
          genre: "Horror/Dark fantasy/Supernatural thriller",
          releaseDate: "August 18, 2003",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/91D07epNE9L.jpg",
          title: "Berserk, Vol. 1" ,
          author: "Kentaro Miura",
          description:
            "Created by Kenturo Miura, Berserk is manga mayhem to the extreme - violent, horrifying, and mercilessly funny - and the wellspring for the internationally popular anime series. Not for the squeamish or the easily offended, Berserk asks for no quarter - and offers none!        His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers. Bearer of a gigantic sword, an iron hand, and the scars of countless battles and tortures, his flesh is also indelibly marked with The Brand, an unholy symbol that draws the forces of darkness to him and dooms him as their sacrifice. But Guts won't take his fate lying down; he'll cut a crimson swath of carnage through the ranks of the damned - and anyone else foolish enough to oppose him! Accompanied by Puck the Elf, more an annoyance than a companion, Guts relentlessly follows a dark, bloodstained path that leads only to death...or vengeance. ",
          genre: "Horror/Dark fantasy/Supernatural thriller",
          releaseDate: "November 26, 1990",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Mangas', null, {});
  }
};

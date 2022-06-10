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
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81VAgJoB3BL.jpg",
          title: "One Punch Man, Vol. 1" ,
          author: "Yusuke Murata",
          description:
          "Every time a promising villain appears, Saitama beats the snot out of 'em with one punch! Can he finally find an opponent who can go toe-to-toe with him and give his life some meaning? Or is he doomed to a life of superpowered boredom?",
          genre: "Action/Comedy/Fiction",
          releaseDate: "June 14, 2012",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg",
          title: "Chainsaw Man, Vol. 1" ,
          author: "Tatsuki Fujimoto",
          description:
          "Denji’s a poor young man who’ll do anything for money, even hunting down devils with his pet devil-dog Pochita. He’s a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he’s betrayed by someone he trusts. Now with the power of a devil inside him, Denji’s become a whole new man—Chainsaw Man!",
          genre: "Action/Comedy/Fiction",
          releaseDate: "June 14, 2012",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81fZ9kfMXGL.jpg",
          title: "Fire Force, Vol. 1" ,
          author: "Atsushi Ohkubo",
          description:
          "The city of Tokyo is plagued by a deadly phenomenon: Spontaneous Human Combustion. Luckily, a special team is there to quench the inferno: The Fire Force! The Fire Soldiers at Special Fire Cathedral 8 are about to get a unique addition. Enter Shinra, a boy who possesses the power to run at the speed of a rocket, leaving behind the famous 'devil's footprints' (and destroying his shoes in the process). Can Shinra and his colleagues discover the source of this strange epidemic before the city burns to ashes?",
          genre: "Dark fantasy/Action/Science Fantasy/Shonen",
          releaseDate: "February 17, 2016",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://m.media-amazon.com/images/I/51HW0wQziGL.jpg",
          title: "Fullmetal Alchemist, Vol. 1" ,
          author: "Hiromu Arakawa",
          description:
          "Alchemy: the mystical power to alter the natural world; something between magic, art and science. When two brothers, Edward and Alphonse Elric, dabbled in this power to grant their dearest wish, one of them lost an arm and a leg…and the other became nothing but a soul locked into a body of living steel. Now Edward is an agent of the government, a slave of the military-alchemical complex, using his unique powers to obey orders…even to kill. Except his powers aren't unique. The world has been ravaged by the abuse of alchemy. And in pursuit of the ultimate alchemical treasure, the Philosopher's Stone, their enemies are even more ruthless than they are…",
          genre: "Dark fantasy/Action/Science Fantasy/Adventure",
          releaseDate: "May 3, 2005",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81iDNjn-r3L.jpg",
          title: "Death Note, Vol. 1: Boredom" ,
          author: "Tsugumi Ohba",
          description:
          "Light Yagami is an ace student with great prospects - and he's bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami, a death god. Any human whose name is written in the notebook dies, and now Light has vowed to use the power of the Death Note to rid the world of evil. But when criminals begin dropping dead, the authorities send the legendary detective L to track down the killer. With L hot on his heels, will Light lose sight of his noble goal... or his life?",
          genre: "Dark fantasy/Horror/Adventure",
          releaseDate: "April 2, 2004",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81wLPgKtYkL.jpg",
          title: "Attack on Titan, Vol. 1" ,
          author: "Hajime Isayama",
          description:
          "For the past century, what's left of mankind has hidden in a giant, three-walled city, trapped in fear of the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming humankind, but the sudden appearance of an enormous Titan is about to change everything.",
          genre: "Dark fantasy/Horror/Adventure",
          releaseDate: "March 17, 2010",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg",
          title: "Naruto, Vol. 1: Uzumaki Naruto" ,
          author: "Masashi Kishimoto",
          description:
          "Naruto is a ninja-in-training with an incorrigible knack for mischief. His wild antics amuse his teammates, but Naruto is completely serious about one thing: becoming the world's greatest ninja! Twelve years ago the Village Hidden in the Leaves was attacked by a fearsome threat. A nine-tailed fox spirit claimed the life of the village leader, the Hokage, and many others. Today, the village is at peace, and a troublemaking kid named Naruto is struggling to graduate from Ninja Academy. His goal may be to become Hokage, but his true destiny will be much more complicated. The adventure begins now!",
          genre: "Fantasy/Action/Adventure/Comedy/Shonen",
          releaseDate: "March 3, 2000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81ZNkhqRvVL.jpg",
          title: "Demon Slayer: Kimetsu no Yaiba, Vol. 1" ,
          author: "Koyoharu Gotouge",
          description:
          "In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out on a dangerous journey to find a way to return his sister to normal and destroy the demon who ruined his life. Learning to slay demons won’t be easy, and Tanjiro barely knows where to start. The surprise appearance of another boy named Giyu, who seems to know what’s going on, might provide some answers…but only if Tanjiro can stop Giyu from killing his sister first! ",
          genre: "Fantasy/Action/Adventure/Horror/Shonen",
          releaseDate: "April 6, 2019",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jujutsu_Kaisen_0_Cover.png/220px-Jujutsu_Kaisen_0_Cover.png",
          title: "Jujutsu Kaisen, Vol. 0" ,
          author: "Gege Akutami",
          description:
          "In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna were lost and scattered about. Should any demon consume Sukuna’s body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of jujutsu sorcerers who exist to protect the precarious existence of the living from the supernatural!  Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a Curse and won't leave him alone. Since Rika is no ordinary Curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat Curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the Curse that haunts him?",
          genre: "Fantasy/Action/Adventure/Horror/Shonen",
          releaseDate: "December 15, 2018",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://m.media-amazon.com/images/I/61dkcMhxvYL.jpg",
          title: "My Hero Academia, Vol. 1" ,
          author: "Kohei Horikoshi",
          description:
          "What would the world be like if 80 percent of the population manifested superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Being a hero would mean learning to use your power, but where would you go to study? The Hero Academy of course! But what would you do if you were one of the 20 percent who were born Quirkless? Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn’t got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny…",
          genre: "Fantasy/Action/Adventure/Horror/Shonen",
          releaseDate: "December 15, 2018",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "https://images-na.ssl-images-amazon.com/images/I/81vbN16NtXL.jpg",
          title: "Bleach, Vol. 1" ,
          author: "Tite Kubo",
          description:
          "Ichigo Kurosaki has always been able to see ghosts, but this ability doesn't change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hollow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her surprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia--who is slowly regaining her powers--it's Ichigo's job to protect the innocent from Hollows and help the spirits themselves find peace.",
          genre: "Fantasy/Action/Shonen",
          releaseDate: "August 3, 2001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          coverImg: "http://prodimage.images-bn.com/pimages/9781591167532_p0_v2_s1200x630.jpg",
          title: "Hunter x Hunter, Vol. 01" ,
          author: "Yoshihiro Togashi",
          description:
          "Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.",
          genre: "Fantasy/Action/Adventure/Shonen",
          releaseDate: "June 4, 1998",
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

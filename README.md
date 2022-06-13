![mangareads logoo](https://user-images.githubusercontent.com/95194326/173257442-f989e97f-f91a-45a9-8e05-a760a1f85166.jpg)

# [Welcome to MangaReads](https://manga-reads.herokuapp.com) 

Developers: Erik Nguyen, Jingxun Yin, Elias Rodriguez, and Michael Dasch 

Project Lead: [Dan Chin, aka "DanTheMan"](https://github.com/bongochin)

Explore the docs to see how to [get started-->](https://github.com/MDasch22/Manga-reads-project/wiki)


## Overview 
  Interested in maybe picking up a manga but don't know where to start..? Here's why MangaReads would be great for you 
  
  ***What we offer***: 
  - Access to a growing library of a wide variety of manga's of different genres.
  - Bookshelves that allows users the ability  to track their manga's based on read status. (e.g., Want to Read, Currently Reading, Read)
  - Users can leave their reviews based on a star rating from 1-5, as well as the option to leave a comment. The review then gets posted, which allows all other users to ability to see what your thoughts were on that manga.

***Some of the Technologies Used***:
 
  - With the given task, some of the technologies that we needed in order to complete our project were the following below... 
 
    - [Express](http://expressjs.com/)
    - [PugJS](https://pugjs.org/api/getting-started.html)
    - [Heroku](https://id.heroku.com/login)

## Features 
  Here are two features that we feel worthy of showing off...
  
  ### Bookshelves 
  The bookshelves will give the user the ability to customize their profile of manga's based on their desires. As mentioned earlier above, each user upon creation will be assigned 3 bookshelves(e.g., Want to Read, Currently Reading, Read). Over time, as the user gets a chance to explore the site and view the selection of all the manga's, they will have the ability to either add or remove manga's from their bookshelve(s) based on their read status. There is no limit to the amount of books that can be added to a bookshelves so we recommend that if you're interested in a manga, just add it to a shelf. 
  
  ### Reviews
  If the user is registered and logged into the site, they will have the ability to access a specific manga's review section where they will see a list of all reviews left by previous users. The user will have the ability to leave their own footprint on our site by having access to add/edit/delete their own review or reviews. Users can only leave a review if they leave a ***star*** rating from 1-5 but have the ability to leave an optional comment for future users to be able to view.
  
  
## Challenges faced 
  With this being our very first group project through the App Academy curriculum, there were bound to be some obstacles that we faced. Overall, this was an awesome learning experience for all the developers on the team. Huge shoutout to our project lead for the amazing guidance throughout this process. Below is a list of some challenges that we as a team faced and how exactly we were able to overcome them.   

  1. One of the biggest challenges as a team that we faces was 100% the user authentication. It was a relatively newer topic for all the  developers and it took some time to truly understand what was going on. We were able to overcome this obstacle by first, referencing all material that was given to us by the App Academy curriculum, and from there it took a collective effort in breaking down code line by line ensuring all variables were set accordingly. 
  
  2. Understanding the correct git flow when working with multiple developers was another problem that we faced. As a team, again, we were all relatively new to the idea of working with multiple developers on the same project. The idea of branching off from the main branch was something we as a team believed to be extremely intimidating in the beginning. Merge conflicts were another challenge we found ourselves getting into at times. We realized that with time, patience, repetition, and some YouTube videos...lol..., git wasn’t nearly as bad as we were making it out to be.
  
  
## Code-Snippets
Below are some code snippets that we as team believe showcase our skill

1. Bookshelf Event Listener

```window.addEventListener("DOMContentLoaded", async (event)=>{

    const bookShelves = document.querySelectorAll(".delete-wantToRead")


    for(let i=0; i<bookShelves.length; i++){

        bookShelves[i].addEventListener("click", async event=>{

            const userId = event.target.id.split('-')[0]
            const bookshelfId = event.target.id.split('-')[1]
            const option = {
                header: {"Content-Tpye": "application/json"},
                method: "POST",
            }

            const res = await fetch(`/users/${userId}/bookshelves/${bookshelfId}/delete`, option);
            const data = await res.json();
            if(data.message==="Success!"){
                const shelf = document.getElementById(`${userId}-${bookshelfId}`)
                shelf.remove()
            }
        })
    }
});
```

2. 5-Star Rating

  ```const allStars = document.querySelectorAll('.star')
let currentRating = document.querySelector('.current_rating');
let numberRating = document.querySelector('#rating');

allStars.forEach( (star,i)=> {
  star.onclick = (e) => {
    e.preventDefault();
    let currentStar = i+1;
    currentRating.innerHTML = `${currentStar} / 5`
    allStars.forEach( (star,j) => {
      if (currentStar >= j+1) star.innerHTML = '&#9733';
      else star.innerHTML = '&#9734'
    })
    rating.value = currentStar
    // review.rating = currentStar;
  }
})
```

3. Manga card CSS 

```.content{
  color: #e5e5e5;
  width: 20%;
  height: 180px;
  margin: 15px;
  box-sizing:border-box;
  float: left;
  text-align: center;
  border-radius: 16px;
  cursor: pointer;
  padding-top: 8px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.58), 0 10px 10px rgba(0,0,0,0.58);
  transition: .5s;
  background: #eeeeee6d;
  border: 3px solid rgba(72, 65, 156, 0.8);
}
.content:hover{
  box-shadow: 0 3px 6px rgba(0,0,0,0.14), 0 3px 6px rgba(0, 0, 0, 0.22);
  transform: translate(0px, -6px);
}
```



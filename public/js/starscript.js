const allStars = document.querySelectorAll('.star')
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
  }
})

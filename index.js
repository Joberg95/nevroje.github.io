// javascript
  let myIndex = 0;

  const myCarousel = () =>  {
      let i;
      let slides  = document.getElementsByClassName("slide");
      for (i = 0; i < slides.lenght; i++) {
        slides[i].style.display = "none";
      }

      myIndex++;
      if (myIndex > slides.lenght)  {myIndex = 1}
      slides[myIndex-1].style.display = "block";
      setTimeout(myCarousel, 2500);
}
  myCarousel();

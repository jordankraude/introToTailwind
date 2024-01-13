document.addEventListener("DOMContentLoaded", () => {
    const circleContainer = document.querySelector(".circle-container");
  
    if (circleContainer) {
      const numberOfCircles = calculateNumberOfCircles();
      const fixedDistanceBetweenCircles = 80; // Adjust the fixed distance between circles
      
      for (let i = 1; i <= numberOfCircles; i++) {
        if (i == 1){
          const circle = document.createElement("div");
          circle.className = "circle";
          circle.style.opacity = "0";
          circle.style.left = `${-50}px`; // Adjust the distance to the right for each circle
          circle.style.animationDelay = `${i * 0.4}s`; // Adjust the animation delay for each circle
          circleContainer.appendChild(circle);
        }
        else{        
          const circle = document.createElement("div");
          circle.className = "circle";
          let distance = -130 + (i * fixedDistanceBetweenCircles)
          circle.style.opacity = "0";
          circle.style.left = `${distance}px`; // Adjust the distance to the right for each circle
          circle.style.animationDelay = `${i * 0.4}s`; // Adjust the animation delay for each circle
          circleContainer.appendChild(circle);}

      }
    }
  });

  function calculateNumberOfCircles(): number {
    const screenWidth = window.innerWidth;
    const circleWidth = 200;
    return Math.ceil(screenWidth / circleWidth) * 4;
  }
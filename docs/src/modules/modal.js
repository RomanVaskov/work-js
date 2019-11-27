const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupForm = document.querySelector('.popup-content');

  let count,
    popupFly;

  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
      document.body.style.overflow = 'hidden';
      count = 0;

      let popupAnimate = () => {
        popupFly = requestAnimationFrame(popupAnimate);
        count++;
        if (count <= 20) {
          popupForm.style.opacity = count * 0.05;
        } else {
          cancelAnimationFrame(popupFly);
        }
      };

      if (document.body.clientWidth === 320) {
        popup.style.display = 'block';
      } else {
        popupFly = requestAnimationFrame(popupAnimate);
      }

      popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
          popup.style.display = 'none';
          document.body.style.overflow = 'visible';
        } else {
          target = target.closest('.popup-content');
          if (!target) {
            popup.style.display = 'none';
            document.body.style.overflow = 'visible';
          }
        }
      });

    });
  });
};

export default togglePopUp;
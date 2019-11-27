const mouseHover = () => {
  const commandPhoto = document.querySelectorAll('img.command__photo');
  commandPhoto.forEach((elem) => {
    let imgSrc = elem.src;
    elem.addEventListener('mouseenter', ({
      target
    }) => {
      target.src = target.dataset.img;
    });
    elem.addEventListener('mouseleave', ({
      target
    }) => {
      target.src = imgSrc;
    });

  });
};

export default mouseHover;
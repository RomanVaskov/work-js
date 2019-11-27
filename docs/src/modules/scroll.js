const goTo = function () {
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);
      if (blockID !== 'close' && blockID !== '') {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
};

export default goTo;
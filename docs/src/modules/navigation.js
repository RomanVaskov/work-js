const toggleMenu = () => {

  document.addEventListener('click', (event) => {
    let target = event.target;
    const menu = document.querySelector('menu');
    const handlerMenu = menu.matches('.active-menu');

    if (target.matches('.close-btn') || target.closest('.menu') || target.matches('menu a') || (handlerMenu && !target.closest('menu'))) {
      menu.classList.toggle('active-menu');
    }

  });
};

export default toggleMenu;
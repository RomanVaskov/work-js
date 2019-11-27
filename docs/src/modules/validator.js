const inputValidate = () => {
  const input = document.querySelectorAll('.calc-block > input');
  input.forEach((elem) => {
    elem.addEventListener('input', () => {
      elem.value = elem.value.replace(/\D/g, '');
    });
  });
};

export default inputValidate;
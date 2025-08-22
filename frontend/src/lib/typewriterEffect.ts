export const initTypewriter = (text: string, elementId: string) => {
  const elemento = document.getElementById(elementId);
  let i = 0;
  let isDeleting = false;

  const digitar = () => {
    const velocidadeNormal = 100;
    const velocidadeApagar = 50;
    const esperaFim = 2000;

    if (!isDeleting && i <= text.length) {
      if (elemento) elemento.textContent = text.substring(0, i);
      i++;
      setTimeout(digitar, i === text.length ? esperaFim : velocidadeNormal);

      if (i > text.length) {
        isDeleting = true;
        i = text.length;
      }
    } else if (isDeleting && i >= 0) {
      if (elemento) elemento.textContent = text.substring(0, i);
      i--;
      setTimeout(digitar, velocidadeApagar);
      if (i < 0) {
        isDeleting = false;
        i = 0;
      }
    }
  };

  digitar();
};
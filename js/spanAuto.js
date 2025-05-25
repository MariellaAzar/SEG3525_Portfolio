document.addEventListener("DOMContentLoaded", function () {

  const title = document.getElementById("animatedTitle");
  const text = title.textContent;
  title.innerHTML = '';

  for (let char of text) {
    const span = document.createElement('span');

    if (char === ' ') {
      span.innerHTML = '&nbsp';
    } else {
      span.textContent = char;
    }

    title.appendChild(span);

  }
});

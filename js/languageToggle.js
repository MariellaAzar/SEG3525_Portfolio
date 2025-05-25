document.addEventListener('DOMContentLoaded', () => {
  
  const enBtn = document.getElementById('enBtn');
  const frBtn = document.getElementById('frBtn');

  function setLanguage(lang) {
    enBtn.classList.toggle('active', lang === 'en');
    frBtn.classList.toggle('active', lang === 'fr');

    // Traduction de tous les élements ayant l'attribut data-en/data-fr
    document.querySelectorAll('[data-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
  }

  // Langage par defaut (FR, car c'est un cours en francais :p)
  setLanguage('fr');

  // Event listeners pour quand on clique le bouton de changement de langues
  enBtn.addEventListener('click', () => setLanguage('en'));
  frBtn.addEventListener('click', () => setLanguage('fr'));
});

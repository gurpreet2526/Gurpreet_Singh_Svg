document.querySelectorAll('img').forEach(icon => {
  icon.addEventListener('click', () => {
    console.log(`Clicked on: ${icon.id}`);
  });
});
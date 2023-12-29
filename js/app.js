//Service Worker
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
<<<<<<< HEAD
    navigator.serviceWorker.register('/sw.js').then(reg => {
=======
    navigator.serviceWorker.register('../sw.js').then(reg => {
>>>>>>> fac9df237b8ddea8b8dea1b40d9888de362ae631
    }).catch(swErr => {
      console.log(`Service Worker Installation Error: ${swErr}}`)
    });
  });
<<<<<<< HEAD
}
=======
} else {
  console.log('No service-worker on this browser');
};
>>>>>>> fac9df237b8ddea8b8dea1b40d9888de362ae631

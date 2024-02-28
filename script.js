if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/worker/service-worker.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el service-worker', err))
  }

/* =========================================================
   PWA SERVICE WORKER
========================================================= */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("./sw.js")
      .then(registration => {

        console.log(
          "MarocCalc PWA ready:",
          registration.scope
        );

      })
      .catch(error => {

        console.error(
          "Service worker registration failed:",
          error
        );

      });

  });

}

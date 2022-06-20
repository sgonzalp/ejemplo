/* 
============ JS Load - end  ============ 
Creé par :      Sigfrido Gonzalez Puga
Projet:         EMICA | ANNEXE | 462166 | Connâitre Raspberry Pi
Date :          Juin 2022
*/


/* ============ Loader-page  ============ */
$(window).on('load', function () {
  setTimeout(function () {
    $(".loader-page").css({ visibility: "hidden", opacity: "0" })
  }, 50);

});
/* ============ Loader-page  ============ */

/* ============ SweetAlert2  ============ */
document.querySelector(".sweetalert2_login").addEventListener('click', function () {
  Swal.fire({
    title: 'Formulaire de connexion',
    html: `<small class="text-warning">Démonstration, aucune fonctionnalité</small><input type="text" id="login" class="swal2-input" placeholder="Utilisateur">
    <input type="password" id="password" class="swal2-input" placeholder="Mot de o
    passe">`,
    confirmButtonText: 'Valider',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Veuillez entrer le login et le mot de passe`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Swal.fire(`
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim())
  })
});


/*


document.querySelector(".sweetalert2_video_player").addEventListener('click', function () {
  swal.fire(
    '<div class="video-responsive"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Q0DGkqki5U4" allowfullscreen></iframe></div>',
    'success'
  );
});

document.querySelector(".second").addEventListener('click', function () {
  Swal.fire("Our second Alert", "With some body text!");
});

document.querySelector(".third").addEventListener('click', function () {
  Swal.fire("Our third Alert", "With some body text and success icon!", "success");
});
*/

/* ============ SweetAlert2  ============ */
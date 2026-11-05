
document.addEventListener("DOMContentLoaded", () => {


  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {
    const currentPage = document.body.classList.contains("home-page")
      ? "home"
      : document.body.classList.contains("crew-page")
        ? "crew"
        : document.body.classList.contains("technology-page")
          ? "technology"
          : "destination";

    navigation.querySelectorAll("a[data-page]").forEach(link => {
      const isCurrent = link.dataset.page === currentPage;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const destinations = {
    moon: {
      name: "Futbol",
      image: "assets/images/planet-moon.jpg",
      description: "Desarrolla tu resistencia, coordinación y trabajo en equipo mediante entrenamientos y actividades deportivas.",
      distance: "informacion",
      time: "informacion"
    },

    mars: {
      name: "Tenis",
      image: "assets/images/planet-mars.jpg",
      description: "Mejora tus reflejos, concentración, agilidad y precisión mediante la práctica individual.",
      distance: "informacion",
      time: "informacion"
    },

    europa: {
      name: "Basquet",
      image: "assets/images/planet-europa.jpg",
      description: "Fortalece tu coordinación, velocidad y capacidad de trabajo en equipo.",
      distance: "informacion",
      time: "informacion"
    },

    titan: {
      name: "Natación",
      image: "assets/images/planet-titan.jpg",
      description: "Mejora tu resistencia cardiovascular, coordinación y condición física mediante ejercicios acuáticos.",
      distance: "informacion",
      time: "informacion"
    }
  };

  const planetImage = document.getElementById("planetImage");

  if (planetImage) {
    const planetName = document.getElementById("planetName");
    const planetDescription = document.getElementById("planetDescription");
    const planetDistance = document.getElementById("planetDistance");
    const planetTime = document.getElementById("planetTime");
    const tabs = document.querySelectorAll(".tab");

    function changeDestination(destination) {
      const selected = destinations[destination];

      if (!selected) return;

      tabs.forEach(tab => {
        const active = tab.dataset.planet === destination;

        tab.classList.toggle("active", active);
        tab.setAttribute("aria-pressed", active);
      });

      planetImage.style.opacity = "0";

      setTimeout(() => {
        planetImage.src = selected.image;
        planetImage.alt = selected.name;

        planetName.textContent = selected.name;
        planetDescription.textContent = selected.description;
        planetDistance.textContent = selected.distance;
        planetTime.textContent = selected.time;

        planetImage.style.opacity = "1";
      }, 200);

      history.replaceState(null, "", `#destination/${destination}`);
    }

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        changeDestination(tab.dataset.planet);
      });
    });

    const initial = location.hash.split("/")[1];

    if (destinations[initial]) {
      changeDestination(initial);
    }

    tabs.forEach(tab => {
      if (tab.dataset.planet === "moon") {
        tab.setAttribute("aria-pressed", "true");
      } else {
        tab.setAttribute("aria-pressed", "false");
      }
    });
  }

  const crewImage = document.getElementById("crewImage");

  if (crewImage) {

    const crew = [
      {
        role: "Salud",
        name: "«Practicar deporte es una inversión en tu bienestar».",
        image: "assets/images/crew-douglas-hurley.png",
        description: "Mejora la condición física Favorece el bienestar mental Promueve hábitos saludables."
      },

      {
        role: "Deporte",
        name: "«Encuentra una disciplina que se adapte a tus intereses y objetivos».",
        image: "assets/images/crew-mark-shuttleworth.png",
        description: "Deportes para diferentes edades. Actividades para principiantes. Desarrollo de habilidades deportivas."
      },

      {
        role: "Promociones",
        name: "«¡Es tu momento de formar parte de nuestra comunidad!».",
        image: "assets/images/crew-victor-glover.png",
        description: "Guía de entrenamiento físico. Planificador semanal de ejercicios. Ebook de alimentación saludable"
      },

      {
        role: "Regalos",
        name: "«¡Suscríbete y recibe recursos gratuitos para comenzar tu camino deportivo!».",
        image: "assets/images/crew-anousheh-ansari.png",
        description: "Anousheh Ansari is an Iranian-American engineer and explorer. She became the first Iranian woman in space and continues to inspire people interested in science and exploration."
      }
    ];

    const crewRole = document.getElementById("crewRole");
    const crewName = document.getElementById("crewName");
    const crewDescription = document.getElementById("crewDescription");
    const crewDots = document.querySelectorAll(".crew-dot");

    function changeCrew(index) {
      const member = crew[index];

      if (!member) return;

      crewDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
        dot.setAttribute("aria-pressed", i === index);
      });

      crewImage.style.opacity = "0";

      setTimeout(() => {
        crewImage.src = member.image;
        crewImage.alt = member.name;

        crewRole.textContent = member.role;
        crewName.textContent = member.name;
        crewDescription.textContent = member.description;

        crewImage.style.opacity = "1";
      }, 200);
    }

    crewDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        changeCrew(index);
      });
    });

    changeCrew(0);
  }

  const technologyImage = document.getElementById("technologyImage");

  if (technologyImage) {

    const technologies = [
      {
        name: "Las fijas",
        image: "assets/images/technology-launch-vehicle.png",
        description: "Predicciones para la Champions League"
      },

      {
        name: "Alimentación Saludable",
        image: "assets/images/technology-spaceport.png",
        description: "Guía de alimentacion saludable"
      },

      {
        name: "Planeacion Fit",
        image: "assets/images/technology-space-capsule.png",
        description: "Guía fitness para un buen proceso desde casa"
      }
    ];

    const technologyName = document.getElementById("technologyName");
    const technologyDescription = document.getElementById("technologyDescription");
    const technologyTabs = document.querySelectorAll(".technology-tab");

    function changeTechnology(index) {
      const technology = technologies[index];

      if (!technology) return;

      technologyTabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
        tab.setAttribute("aria-pressed", i === index);
      });

      technologyImage.style.opacity = "0";

      setTimeout(() => {
        technologyImage.src = technology.image;
        technologyImage.alt = technology.name;

        technologyName.textContent = technology.name;
        technologyDescription.textContent = technology.description;

        technologyImage.style.opacity = "1";
      }, 200);
    }

    technologyTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        changeTechnology(index);
      });
    });

    changeTechnology(0);
  }

  

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz-3bjJTxuLsIC1fyHmsi-beL6h9YZ4JEMOuyNde9XQURorrg1aHM4brVDIaBKoYBdk/exec";

  const subscribeModal = document.getElementById("subscribeModal");
  const openSubscribe = document.getElementById("openSubscribe");
  const closeSubscribe = document.getElementById("closeSubscribe");

  const subscribeForm = document.getElementById("subscribeForm");
  const subscriberEmail = document.getElementById("subscriberEmail");
  const subscribeMessage = document.getElementById("subscribeMessage");

  const verificationModal = document.getElementById("verificationModal");
  const closeVerification = document.getElementById("closeVerification");
  const verificationForm = document.getElementById("verificationForm");
  const verificationCode = document.getElementById("verificationCode");
  const verificationMessage = document.getElementById("verificationMessage");

  let pendingEmail = "";

async function sendRequest(data) {

    const response = await fetch(SCRIPT_URL, {
        method: "POST",
        redirect: "follow",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
    });

    const texto = await response.text();

    console.log("Respuesta de Google Apps Script:", texto);

    try {
        return JSON.parse(texto);
    } catch (error) {
        throw new Error("Google Apps Script no devolvió una respuesta JSON válida.");
    }
}

  function openSubscription() {
    subscribeModal.classList.add("active");
    subscribeModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    setTimeout(() => subscriberEmail.focus(), 200);
  }

  function closeSubscription() {
    subscribeModal.classList.remove("active");
    subscribeModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }


function openVerification() {

    verificationModal.classList.add("active");
    verificationModal.setAttribute("aria-hidden", "false");

    subscribeModal.classList.remove("active");
    subscribeModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "hidden";

    verificationCode.value = "";
    verificationMessage.textContent = "";

    setTimeout(() => {
        verificationCode.focus();
    }, 200);
}


  function closeVerificationModal() {
    verificationModal.classList.remove("active");
    verificationModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openSubscribe) {
    openSubscribe.addEventListener("click", openSubscription);
  }

  if (closeSubscribe) {
    closeSubscribe.addEventListener("click", closeSubscription);
  }

  if (subscribeModal) {
    subscribeModal.addEventListener("click", (event) => {
      if (event.target === subscribeModal) {
        closeSubscription();
      }
    });
  }

  if (closeVerification) {
    closeVerification.addEventListener("click", closeVerificationModal);
  }

  if (verificationModal) {
    verificationModal.addEventListener("click", (event) => {
      if (event.target === verificationModal) {
        closeVerificationModal();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (verificationModal?.classList.contains("active")) {
        closeVerificationModal();
      } else if (subscribeModal?.classList.contains("active")) {
        closeSubscription();
      }
    }
  });

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const correo = subscriberEmail.value.trim().toLowerCase();
      const button = subscribeForm.querySelector("button[type='submit']");

      if (!correo || !subscriberEmail.checkValidity()) {
        subscriberEmail.reportValidity();
        return;
      }

      button.disabled = true;
      button.textContent = "ENVIANDO...";
      subscribeMessage.textContent = "";

      try {
        const result = await sendRequest({
          accion: "sendCode",
          correo: correo
        });

        if (result.resultado === "enviado") {
          pendingEmail = correo;
          openVerification();

        } else if (result.resultado === "duplicado") {
          subscribeMessage.textContent =
            "Este correo ya está suscrito.";

        } else if (result.resultado === "espera") {
          subscribeMessage.textContent =
            "Espera un minuto antes de solicitar otro código.";

        } else {
          subscribeMessage.textContent =
            result.mensaje || "No se pudo enviar el código.";
        }

      } catch (error) {
        console.error(error);
        subscribeMessage.textContent =
          "Error de conexión. Intenta nuevamente.";
      } finally {
        button.disabled = false;
        button.textContent = "SUSCRIBIRSE";
      }
    });
  }

  if (verificationForm) {
    verificationForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const codigo = verificationCode.value.trim();
      const button = verificationForm.querySelector(
        "button[type='submit']"
      );

      if (!/^\d{6}$/.test(codigo)) {
        verificationMessage.textContent =
          "Introduce un código válido de 6 dígitos.";
        return;
      }

      button.disabled = true;
      button.textContent = "VERIFICANDO...";
      verificationMessage.textContent = "";

      try {
        const result = await sendRequest({
          accion: "verifyCode",
          correo: pendingEmail,
          codigo: codigo
        });

        if (result.resultado === "verificado") {

          verificationMessage.textContent =
            "¡Correo verificado correctamente!";

          verificationForm.reset();

          setTimeout(() => {
            closeVerificationModal();
            pendingEmail = "";
            subscribeForm.reset();
            closeSubscription();
          }, 1800);

        } else if (result.resultado === "incorrecto") {

          verificationMessage.textContent =
            "Código incorrecto. Intentos restantes: " +
            result.intentosRestantes;

        } else if (result.resultado === "caducado") {

          verificationMessage.textContent =
            "El código caducó. Solicita uno nuevo.";

        } else if (result.resultado === "bloqueado") {

          verificationMessage.textContent =
            "Has superado el límite de intentos. Solicita otro código más tarde.";

        } else if (result.resultado === "duplicado") {

          verificationMessage.textContent =
            "Este correo ya está registrado.";

        } else {

          verificationMessage.textContent =
            result.mensaje || "No se pudo verificar el correo.";
        }

      } catch (error) {
        console.error(error);

        verificationMessage.textContent =
          "Error de conexión. Intenta nuevamente.";

      } finally {
        button.disabled = false;
        button.textContent = "VERIFICAR CORREO";
      }
    });
  }
  
const resendCode = document.getElementById("resendCode");

if (resendCode) {
  resendCode.addEventListener("click", async () => {

    if (!pendingEmail) return;

    resendCode.disabled = true;
    resendCode.textContent = "ENVIANDO...";

    try {
      const result = await sendRequest({
        accion: "sendCode",
        correo: pendingEmail
      });

      if (result.resultado === "enviado") {
        verificationMessage.textContent =
          "Se ha enviado un nuevo código.";

      } else if (result.resultado === "espera") {
        verificationMessage.textContent =
          "Espera un minuto antes de solicitar otro código.";

      } else {
        verificationMessage.textContent =
          result.mensaje || "No se pudo reenviar el código.";
      }

    } catch (error) {
      verificationMessage.textContent =
        "Error al reenviar el código.";

    } finally {
      resendCode.disabled = false;
      resendCode.textContent = "REENVIAR CÓDIGO";
    }
  });
}
});
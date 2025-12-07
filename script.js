/* ========================================
   HACKTANDIL - Elementos Interactivos
   Scripts de Landing Page Cyberpunk
   ======================================== */

// Inicializar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initDateTime();
  initTypewriter();
  initParticles();
  initCounters();
  initGlitchEffects();
  initFormHandlers();
});

// ========================================
// Mostrar Fecha y Hora
// ========================================
function initDateTime() {
  const datetimeEl = document.getElementById("datetime");

  function updateDateTime() {
    const now = new Date();
    const formatted = now
      .toISOString()
      .replace("T", " // ")
      .substring(0, 21)
      .replace(/-/g, ".");
    datetimeEl.textContent = formatted;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
}

// ========================================
// Efecto Máquina de Escribir
// ========================================
function initTypewriter() {
  const typedTextEl = document.getElementById("typed-text");
  const phrases = [
    "ENCUENTRO DE BUILDERS",
    "COMUNIDAD TECH DE TANDIL",
    "CODEAR • PENSAR • CREAR",
    "ESTUDIANTES, TRABAJADORES, BUILDERS",
    "COMPARTIR CONOCIMIENTO",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pausa al final
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pausa antes de nueva frase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ========================================
// Partículas Flotantes
// ========================================
function initParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 25; // Reducido

  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer, i);
  }
}

function createParticle(container, index) {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Posicionamiento y animación aleatorios
  const startX = Math.random() * 100;
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 15 + 15;
  const delay = Math.random() * 20;

  particle.style.cssText = `
        left: ${startX}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 255, 136, 0.6);
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        opacity: ${Math.random() * 0.3 + 0.1};
    `;

  container.appendChild(particle);
}

// ========================================
// Contadores Animados
// ========================================
function initCounters() {
  const counters = document.querySelectorAll(".stat-value");
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ========================================
// Efectos Glitch (sutiles)
// ========================================
function initGlitchEffects() {
  // Mínimo - sin animaciones constantes
}

// ========================================
// Manejadores de Formularios
// ========================================
function initFormHandlers() {
  // Formulario de newsletter
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletter);
  }
}

function handleNewsletter(e) {
  e.preventDefault();

  const form = e.target;
  const input = form.querySelector(".newsletter-input");
  const btn = form.querySelector(".newsletter-btn");
  const email = input.value;

  // Feedback visual
  const originalText = btn.textContent;
  btn.textContent = "TRANSMITIENDO...";
  btn.style.pointerEvents = "none";

  // Simular llamada a API
  setTimeout(() => {
    btn.textContent = "SEÑAL RECIBIDA";
    btn.style.background = "#00ff00";
    btn.style.borderColor = "#00ff00";

    setTimeout(() => {
      alert(
        `📡 ¡Transmisión recibida!\n\nEmail: ${email}\n\nRecibirás actualizaciones en esta dirección.`,
      );
      input.value = "";
      btn.textContent = originalText;
      btn.style.pointerEvents = "auto";
      btn.style.background = "";
      btn.style.borderColor = "";
    }, 1000);
  }, 1500);
}

// ========================================
// Scroll Suave para Enlaces Ancla
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ========================================
// Easter Egg de Teclado
// ========================================
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join("") === konamiSequence.join("")) {
    activateEasterEgg();
  }
});

function activateEasterEgg() {
  document.body.style.animation = "rainbow-bg 2s linear infinite";

  const style = document.createElement("style");
  style.textContent = `
        @keyframes rainbow-bg {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
  document.head.appendChild(style);

  setTimeout(() => {
    document.body.style.animation = "";
    style.remove();
  }, 5000);

  console.log(
    "%c🎮 ¡CÓDIGO KONAMI ACTIVADO!",
    "font-size: 24px; color: #00ffff; text-shadow: 0 0 10px #00ffff;",
  );
}

// ========================================
// Mensaje de Bienvenida en Consola
// ========================================
console.log(
  `
%c╔══════════════════════════════════════════╗
║                                          ║
║   █░█ ▄▀█ █▀▀ █▄▀ ▀█▀ ▄▀█ █▄░█ █▀▄ █ █░░  ║
║   █▀█ █▀█ █▄▄ █░█ ░█░ █▀█ █░▀█ █▄▀ █ █▄▄  ║
║                                          ║
║   ¡Bienvenido/a, programador/a!          ║
║   ¿Querés contribuir? Encontranos en GitHub║
║                                          ║
╚══════════════════════════════════════════╝
`,
  "color: #00ffff; font-family: monospace;",
);

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector(".site-header");
const topProgress = document.getElementById("topProgress");
const carouselTrack = document.getElementById("carouselTrack");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

function getCurrentPageName() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path.toLowerCase();
}

function normalizeNavHref(href) {
  if (!href) {
    return "";
  }

  return href.split("#")[0].split("?")[0].toLowerCase() || "index.html";
}

function updateActiveNavLinks() {
  const currentPage = getCurrentPageName();
  const navLinks = document.querySelectorAll('.site-nav a, .mobile-nav a');

  navLinks.forEach((link) => {
    const linkPage = normalizeNavHref(link.getAttribute("href"));
    link.classList.toggle("active", linkPage === currentPage);
  });
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  if (topProgress) {
    topProgress.style.width = `${percent}%`;
  }

  if (window.scrollY > 8) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));

const textMotionTargets = document.querySelectorAll(
  ".hero-copy .eyebrow, .hero-copy h1, .hero-copy .lead, .hero-showcase-copy h2, .hero-showcase-copy p, .section-head .eyebrow, .section-head h2, .section-note, .strip article h2, .strip article p, .about-panel h3, .about-panel p, .service-card h3, .service-card p, .profile-card p, .status-guide-card h3, .status-guide-card p, .project-spotlight-copy h3, .project-spotlight-copy p, .contact-form label, .contact-card h3, .contact-card p"
);

let motionIndex = 0;

textMotionTargets.forEach((el) => {
  if (el.classList.contains("motion-ready")) {
    return;
  }

  const motionClass = motionIndex % 2 === 0 ? "text-motion-left" : "text-motion-right";
  const motionDelay = Math.min(motionIndex * 45, 420);

  el.classList.add("motion-ready", motionClass);
  el.style.setProperty("--motion-delay", `${motionDelay}ms`);
  motionIndex += 1;
});

const filterButtons = document.querySelectorAll(".filter-btn");
const spotlightImage = document.getElementById("spotlightImage");
const spotlightTitle = document.getElementById("spotlightTitle");
const spotlightType = document.getElementById("spotlightType");
const spotlightDescription = document.getElementById("spotlightDescription");
const projectCards = Array.from(document.querySelectorAll(".project-card"));

const carouselSlides = carouselTrack ? Array.from(carouselTrack.querySelectorAll(".carousel-slide")) : [];
let carouselIndex = 0;

function renderCarouselDots() {
  if (!carouselDots) {
    return;
  }

  carouselDots.innerHTML = "";

  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `carousel-dot${index === carouselIndex ? " active" : ""}`;
    dot.setAttribute("aria-label", `Go to showcase slide ${index + 1}`);
    dot.addEventListener("click", () => {
      carouselIndex = index;
      updateCarousel();
    });
    carouselDots.append(dot);
  });
}

function updateCarousel() {
  if (!carouselTrack || carouselSlides.length === 0) {
    return;
  }

  carouselIndex = Math.max(0, Math.min(carouselIndex, carouselSlides.length - 1));
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;

  if (carouselPrev) {
    carouselPrev.disabled = carouselIndex === 0;
  }

  if (carouselNext) {
    carouselNext.disabled = carouselIndex === carouselSlides.length - 1;
  }

  renderCarouselDots();
}

if (carouselPrev) {
  carouselPrev.addEventListener("click", () => {
    carouselIndex -= 1;
    updateCarousel();
  });
}

if (carouselNext) {
  carouselNext.addEventListener("click", () => {
    carouselIndex += 1;
    updateCarousel();
  });
}

window.addEventListener("resize", updateCarousel);

updateCarousel();

updateActiveNavLinks();

function setProjectFilter(filter) {
  projectCards.forEach((card) => {
    const { type, stage } = card.dataset;
    const show = filter === "all" || type === filter || stage === filter;

    if (show) {
      card.classList.remove("hide");
      card.style.display = "block";
    } else {
      card.classList.add("hide");
      window.setTimeout(() => {
        if (card.classList.contains("hide")) {
          card.style.display = "none";
        }
      }, 220);
    }
  });

  const firstVisible = projectCards.find((card) => card.style.display !== "none");
  if (firstVisible) {
    updateProjectSpotlight(firstVisible);
  }

}

function updateProjectSpotlight(card) {
  if (!card || !spotlightImage || !spotlightTitle || !spotlightType || !spotlightDescription) {
    return;
  }

  const image = card.querySelector("img");
  const title = card.querySelector("h3");
  const tag = card.querySelector(".tag");
  const description = card.dataset.description || "Project details available on request.";

  if (image) {
    spotlightImage.src = image.src;
    spotlightImage.alt = image.alt || "Featured project image";
  }

  if (title) {
    spotlightTitle.textContent = title.textContent;
  }

  if (tag) {
    spotlightType.textContent = tag.textContent;
  }

  spotlightDescription.textContent = description;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { filter } = button.dataset;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    setProjectFilter(filter);
  });
});

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => updateProjectSpotlight(card));
  card.addEventListener("focusin", () => updateProjectSpotlight(card));
});

if (projectCards.length > 0) {
  updateProjectSpotlight(projectCards[0]);
}

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const trigger = item.querySelector(".accordion-trigger");

  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    accordionItems.forEach((target) => {
      target.classList.remove("open");
      const targetTrigger = target.querySelector(".accordion-trigger");
      if (targetTrigger) {
        targetTrigger.setAttribute("aria-expanded", "false");
      }
    });

    if (!isOpen) {
      item.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const backToTopLinks = document.querySelectorAll(".back-to-top");

if (form && formMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      formMessage.textContent = "Please complete all required fields.";
      return;
    }

    formMessage.textContent = "Thanks. Your inquiry has been drafted locally.";
    form.reset();
  });
}

backToTopLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

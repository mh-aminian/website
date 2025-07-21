// Navbar color and active link change on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector("#navbar");

  function updateNav() {
    const scrollY = window.pageYOffset;
    let activeFound = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
        activeFound = true;
      }
    });

    // Toggle navbar background class after scroll threshold
    if (scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // If no active section, remove all active link classes
    if (!activeFound) {
      navLinks.forEach((link) => link.classList.remove("active"));
    }
  }

  window.addEventListener("scroll", updateNav);
  updateNav(); // Initial run
});

// Auto-collapse navbar on link click (for small screens)
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
});

// Mouse gradient highlight effect
const highlight = document.getElementById('mouse-gradient-highlight');
document.addEventListener('mousemove', (e) => {
  highlight.style.opacity = '1';
  highlight.style.left = `${e.clientX}px`;
  highlight.style.top = `${e.clientY}px`;
});
document.addEventListener('mouseout', () => {
  highlight.style.opacity = '0';
});

// Preloader fade out on window load
jQuery($ => {
  $(window).on('load', () => {
    setTimeout(() => {
      $('.preloader').fadeOut('slow', function () {
        $(this).remove();
      });
    }, 4000);
  });
});

// Toast notification with sound on window load
window.onload = () => {
  const toastElement = document.querySelector('.toast');
  const toast = new bootstrap.Toast(toastElement);
  const alertSound = new Audio('sounds/info.mp3'); // Update path if needed

  setTimeout(() => {
    toast.show();
    alertSound.play();
  }, 10000); // Show after 10s delay
};

// Email copy popover with clipboard support
document.addEventListener('DOMContentLoaded', () => {
  const email = 'mohammadhossein.aminian@gmail.com';
  const btn = document.getElementById('copyEmailBtn');
  const popover = new bootstrap.Popover(btn);

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
      popover.show();
      setTimeout(() => popover.hide(), 3000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
    });
  });
});

// Portfolio collapse behavior: close others when one opens
$(document).ready(() => {
  $('.port-collapse-btn').on('click', function (e) {
    e.preventDefault();

    const target = $(this).attr('href');

    // Find all sibling collapses within the same parent container (for subsections)
    const $parentCollapse = $(this).closest('.collapse, .portfolio-wrapper'); // closest wrapper or collapse container
    const $allSiblings = $parentCollapse.find('.collapse').not(target);

    // Close siblings collapses inside this parent (e.g. PowerBI, Tableau, SQL inside Business Intelligence)
    $allSiblings.collapse('hide');

    // Toggle the clicked target
    $(target).collapse('toggle');

    // Manage active class for buttons within this group
    const $allButtons = $parentCollapse.find('.portfolio-collapse-btn');
    $allButtons.not(this).removeClass('active');
    $(this).toggleClass('active');
  });
});

// text animation portfolio
document.addEventListener("DOMContentLoaded", function () {
  new Typed('#typed', {
    strings: [
      "Always evolving...",
      "More coming soon...",
      "Continuously improving...",
      "The journey continues...",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    showCursor: true,
    cursorChar: '|',
  });
});

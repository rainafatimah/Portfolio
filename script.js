// --------------------
// CERTIFICATE LIGHTBOX
// --------------------
const certImages = document.querySelectorAll(".cert-item img");

certImages.forEach(img => {
  img.addEventListener("click", () => {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");

    // Create image
    const popupImg = document.createElement("img");
    popupImg.src = img.src;

    // Append image to overlay
    overlay.appendChild(popupImg);

    // Close on click
    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    // Add to body
    document.body.appendChild(overlay);
  });
});

// --------------------
// PREVENT FORM SUBMIT (Demo Purpose)
// --------------------
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}

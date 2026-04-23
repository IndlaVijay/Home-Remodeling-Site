document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      contactMessage.textContent =
        "Thank you. Your message has been received. Our team will contact you soon.";

      contactForm.reset();
    });
  }

  const bookingForm = document.getElementById("bookingForm");
  const bookingMessage = document.getElementById("bookingMessage");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone");
      const date = document.getElementById("date");
      const time = document.getElementById("time");
      const service = document.getElementById("service");
      const propertyType = document.getElementById("propertyType");

      let isValid = true;

      const fields = [
        { input: name, errorId: "nameError", message: "Please enter your full name." },
        { input: email, errorId: "emailError", message: "Please enter a valid email." },
        { input: phone, errorId: "phoneError", message: "Please enter your phone number." },
        { input: date, errorId: "dateError", message: "Please select a date." },
        { input: time, errorId: "timeError", message: "Please select a time." },
        { input: service, errorId: "serviceError", message: "Please select a service." },
        { input: propertyType, errorId: "propertyTypeError", message: "Please select a property type." }
      ];

      fields.forEach((field) => {
        const errorElement = document.getElementById(field.errorId);
        if (errorElement) {
          errorElement.textContent = "";
        }

        if (!field.input.value.trim()) {
          if (errorElement) {
            errorElement.textContent = field.message;
          }
          isValid = false;
        }
      });

      const emailValue = email.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailValue && !emailPattern.test(emailValue)) {
        const emailError = document.getElementById("emailError");
        if (emailError) {
          emailError.textContent = "Please enter a valid email address.";
        }
        isValid = false;
      }

      if (!isValid) {
        bookingMessage.textContent = "";
        return;
      }

      bookingMessage.textContent =
        "Thank you. Your consultation request has been submitted.";
      bookingForm.reset();
    });
  }
});
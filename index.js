 const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('mobile-open');
    });

    hamburger.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') hamburger.click();
    });


       const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop redirect
    status.textContent = "⏳ Sending..."; // show loading message

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "✅ Thanks! Your message has been sent.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "❌ Oops! Something went wrong. Please try again.";
        status.style.color = "red";
      }
    } catch (err) {
      status.textContent = "⚠️ Network error. Please try again later.";
      status.style.color = "red";
    }
  });
      //document.addEventListener("contextmenu", event => event.preventDefault());

      document.onkeydown = function(e) {
        if (
          e.key === "F12" || 
          (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
          (e.ctrlKey && e.key === "U")
        ) {
          return false;
        }
      };
      


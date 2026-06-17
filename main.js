// Mobile menu toggle
(function () {
emailjs.init({
publicKey: "Ks8g57G6giZvz-BmI",
});
})();

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
document.body.classList.toggle("mobile-nav-active");
menuBtn.classList.toggle("fa-bars");
menuBtn.classList.toggle("fa-xmark");
});

// Auto-close menu when clicking nav links
document.querySelectorAll("header nav a").forEach((link) => {
link.addEventListener("click", () => {
if (document.body.classList.contains("mobile-nav-active")) {
document.body.classList.remove("mobile-nav-active");
menuBtn.classList.replace("fa-xmark", "fa-bars");
}
});
});

// Insurance typing effect
let typed = new Typed("#auto-input", {
strings: [
"Licensed Insurance Agent",
"Indexed Universal Life Specialist",
"Tax-Advantaged Retirement Strategies",
"Family Protection Planning",
"Cash Value Life Insurance",
"Legacy Planning",
"Pinnacle Life Group",
"Helping Families Build Wealth",
"Financial Protection Solutions",
"Florida 2-15 Licensed Agent"
],
typeSpeed: 90,
backSpeed: 90,
backDelay: 100,
loop: true,
});


// Open modal when clicking Download button
// downloadBtn.addEventListener("click", () => {
//   modal.style.display = "flex";
// });

// // Close modal when clicking X
// closeModal.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// // Close modal when clicking outside
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// resumeForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // Stop default behavior

//   // Send the email via EmailJS
//   emailjs.sendForm("service_0h0cayd", "template_s2s2ewg", "#resumeForm").then(
//     () => {
//       // Success: Trigger resume download
//       const link = document.createElement("a");
//       link.href = "assets/documents/ab.resume.pdf";
//       link.download = "ab.resume.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       // Close modal and reset form
//       modal.style.display = "none";
//       resumeForm.reset();

//       // Optional: Show a success message
//       alert("Thank you! I look forward to connecting with you");
//     },
//     (error) => {
//       console.log("FAILED...", error);
//       alert("Oops! Something went wrong. Please try again.");
//     }
//   );
// });

// // Work With Me Modal Logic
// const workBtn = document.getElementById("workWithMeBtn");
// const workModal = document.getElementById("workWithMeModal");
// const closeWorkModal = document.getElementById("closeWorkModal");
// const workForm = document.getElementById("workWithMeForm");

// // Open modal
// // Work With Me Modal - works for ALL buttons with the class
// document.querySelectorAll('.work-with-me-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         workModal.style.display = 'flex';
//     });
// });

// // Close modal with X
// closeWorkModal.addEventListener("click", () => {
//   workModal.style.display = "none";
// });

// // Close when clicking outside
// workModal.addEventListener("click", (e) => {
//   if (e.target === workModal) {
//     workModal.style.display = "none";
//   }
// });

// // Form submission with EmailJS
// workForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   emailjs.sendForm("service_0h0cayd", "template_69033r8", "#workWithMeForm").then(
//     () => {
//       // Success
//       workModal.style.display = "none";
//       workForm.reset();
//       alert("Thank you! I’ll BE CONTACTING YOU SOON!");
//     },
//     (error) => {
//       console.log("FAILED...", error);
//       alert("Oops! Something went wrong. Please try again.");
//     }
//   );
// });

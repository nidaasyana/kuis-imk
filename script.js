document.addEventListener("DOMContentLoaded", () => {
  const busSearchForm = document.getElementById("busSearchForm");
  const commentForm = document.getElementById("commentForm"); // Pastikan ini ada jika Anda menambahkannya lagi

  // --- Bus Search Form Logic ---
  if (busSearchForm) {
    busSearchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const origin = document.getElementById("origin").value;
      const destination = document.getElementById("destination").value;
      const travelDate = document.getElementById("travel-date").value;
      const passengers = document.getElementById("passengers").value;

      if (!origin || !destination || !travelDate || !passengers) {
        alert("Harap lengkapi semua kolom wajib (Kota Asal, Kota Tujuan, Tanggal Keberangkatan, Penumpang).");
        return;
      }
      console.log("--- Data Pencarian Tiket Bus ---");
      console.log("Kota Asal:", origin);
      console.log("Kota Tujuan:", destination);
      console.log("Tanggal Keberangkatan:", travelDate);
      console.log("Jumlah Penumpang:", passengers);
      alert("Pencarian tiket bus berhasil! (Data hanya ditampilkan di konsol)");
    });
  }

  // --- Image Slider Logic ---
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentSlide = 0;
  let slideInterval = setInterval(showNextSlide, 5000);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
    currentSlide = index;
  }

  function showNextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function showPrevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextSlide, 5000);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      showNextSlide();
      resetInterval();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      showPrevSlide();
      resetInterval();
    });
  }
  showSlide(0);

  // --- Comment Form Submission Logic (jika ada) ---
  // Jika Anda TIDAK menggunakan form komentar, Anda bisa menghapus bagian ini
  if (commentForm) {
    commentForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const commentText = document.getElementById("comment-text").value;
      console.log("--- Komentar Baru ---");
      console.log("Nama:", name);
      console.log("Komentar:", commentText);
      alert("Terima kasih atas komentar Anda!");
      document.getElementById("name").value = "";
      document.getElementById("comment-text").value = "";
    });
  }

  // --- Navbar Toggle Logic ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active"); // Untuk animasi hamburger
    });

    // Opsional: Tutup menu saat link diklik (untuk UX mobile)
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      });
    });
  }
});

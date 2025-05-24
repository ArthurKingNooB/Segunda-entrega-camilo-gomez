  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const filterOffer = document.getElementById("filterOffer");
    const cards = document.querySelectorAll("#productos .col-md-6");

    function filterProducts() {
      const searchValue = searchInput.value.toLowerCase();
      const typeValue = filterType.value.toLowerCase();
      const offerValue = filterOffer.value;

      cards.forEach((card) => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const isOffer = card.querySelector(".discount-badge") !== null;

        const matchesSearch = title.includes(searchValue);
        const matchesType = typeValue === "" || title.includes(typeValue);
        const matchesOffer =
          offerValue === "" ||
          (offerValue === "oferta" && isOffer) ||
          (offerValue === "normal" && !isOffer);

        if (matchesSearch && matchesType && matchesOffer) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchInput.addEventListener("input", filterProducts);
    filterType.addEventListener("change", filterProducts);
    filterOffer.addEventListener("change", filterProducts);
  });
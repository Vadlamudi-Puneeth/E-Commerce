document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:8080/api/products")
    .then(response => response.json())
    .then(products => {
      const container = document.getElementById("latest-products");

      if (!Array.isArray(products) || products.length === 0) {
        container.innerHTML = "<p>No products available.</p>";
        return;
      }

      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;" />
          <h3>${product.name}</h3>
          <p>★★★★☆ ${product.rating}</p>
          <p><strong>Price:</strong> ₹${product.price}</p>
          <p>${product.description}</p>
        `;

        container.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
      const container = document.getElementById("latest-products");
      if (container) {
        container.innerHTML = "<p>Error loading products.</p>";
      }
    });
});



// search bar

  const searchInput = document.getElementById("search-input");
  const dropdown = document.getElementById("suggestions");

  // Show dropdown on focus
  searchInput.addEventListener("focus", () => {
    dropdown.style.display = "flex";
  });

  // Hide dropdown when clicked outside
  document.addEventListener("click", (e) => {
    if (!document.querySelector(".nav-search").contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

  // Handle option click
  dropdown.addEventListener("click", (e) => {
    if (e.target.dataset.link) {
      const link = e.target.dataset.link;
      window.location.href = link;
    }
  });
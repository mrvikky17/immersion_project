
    async function searchProducts() {
      const query = document.getElementById("searchInput").value.trim();
      const container = document.getElementById("productsContainer");
      container.innerHTML = "";

      if (!query) {
        alert("Search field cannot be empty.");
        return;
      }

      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();

        if (data.products.length === 0) {
          container.innerHTML = "<p>No products found.</p>";
          return;
        }

        data.products.forEach(product => {
          const card = document.createElement("div");
          card.className = "product-card";

          card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
          `;

          container.appendChild(card);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        container.innerHTML = "<p>Failed to fetch products. Try again later.</p>";
      }
    }
 
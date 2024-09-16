const cardData = [
  {
    url: "https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Earphone Type C",
    price: "Rs. 1099",
    quantity: 23,
  },
  {
    url: "https://images.unsplash.com/photo-1503328427499-d92d1ac3d174?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bluetooth Smart Watch",
    price: "Rs. 3999",
    quantity: 20,
  },
  {
    url: "https://images.unsplash.com/photo-1625887725174-ac938d8700ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone Xr",
    price: "Rs. 11999",
    quantity: 23,
  },
  {
    url: "https://images.unsplash.com/photo-1625887725174-ac938d8700ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone Xr",
    price: "Rs. 11999",
    quantity: 23,
  },
  {
    url: "https://images.unsplash.com/photo-1625887725174-ac938d8700ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Iphone Xr",
    price: "Rs. 11999",
    quantity: 23,
  },
];

function displayCards() {
  const cardContainer = document.querySelector(".card-container");
  cardData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img
            src=${item.url}
            alt=""
          />
          <h4>${item.title}</h4>
          <!-- Card ma vako price and quantity section -->
          <div class="card-pq">
            <p>${item.price}</p>
            <div class="card-quantity-section">
              <img src="/Images/inventory.svg" alt="" />
              <p>${item.quantity}</p>
            </div>
          </div>
          <div class="card-cta">
            <button class="edit">
              <img src="/Images/edit_icon.svg" alt="edit icon" />Edit
            </button>
            <button class="delete">
              <img src="/Images/delete.svg" alt="delete icon" />Delete
            </button>
          </div>
    `;

    cardContainer.appendChild(card);
  });
}

displayCards();

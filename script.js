console.log("connected");

const loadProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  displayProducts(data);
};

const displayProducts = (data) => {
  // console.log(data);
  const cardContainer = document.querySelector(".card-container");
  console.log(cardContainer);
  data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.className = "p-5";
    div.innerHTML = `
    <div class="card bg-green-300 shadow-sm">
          <figure class="max-w-36 mx-auto">
            <img
              src="${element.image}"
              class="rounded-xl w-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Title : ${element.title.slice(0,15)} </h2>
            <div class="flex items-center gap-10 font-bold">
              <p>Price : ${element.price}</p>
              <button class="btn btn-warning">Category : ${element.category}</button>
            </div>
            <div class="flex items-center gap-10 font-bold">
              <p>Count : ${element.rating.count}</p>
              <p>Rating : ${element.rating.rate}</p>
            </div>
            <div class="card-actions">
              <button class="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
    `;
    cardContainer.appendChild(div);
  });
};

// final function invocation
loadProducts();

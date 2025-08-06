console.log("connected");

// data load from api==============================
const loadProducts = async (query = "") => {
  document.querySelector("#loading-spinner").classList.remove("hidden");
  console.log(query);
  const res = await fetch(`https://fakestoreapi.com/products${query}`);
  const data = await res.json();
  if (data.length > 0) {
    document.querySelector("#loading-spinner").classList.add("hidden");
    document.querySelector("#data-not-found").classList.add("hidden");
  }
  if (!data.length) {
    document.querySelector("#data-not-found").classList.remove("hidden");
    document.querySelector("#loading-spinner").classList.add("hidden");
  }
  displayProducts(data);
};

// data showed in the ui======================================
const displayProducts = (data) => {
  // console.log(data);
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";
  // console.log(cardContainer);
  data.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-green-300 shadow-sm h-96">
          <figure class="w-32 h-32 mx-auto m-5">
            <img
              src="${element.image}"
              class="rounded-xl w-full h-full"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Title : ${element.title.slice(0, 15)} </h2>
            <button class="btn btn-warning">Category : ${
              element.category
            }</button>
            <div class="flex items-center gap-2 font-bold">
              <p>Price : ${element.price}</p>
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

// search functionality implementation=============================
const handleSearch = () => {
  // console.log("search btn clicked");
  const searchInputValue = document.querySelector("#search-input").value;
  console.log(searchInputValue);
  loadProducts(`/category/${searchInputValue}`);
};

// final function invocation================================
loadProducts();

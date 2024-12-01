// Elements
const mainContent = document.getElementById("mainContent");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");

const aboutUs = document.getElementById("aboutUs");
const contactUs = document.getElementById("contactUs");

// Load About Us Content
function loadAbout() {
  mainContent.style.display = "none";
  aboutUs.style.display = "block";
  contactUs.style.display = "none";
}

// Load Contact Us Content
function loadContact() {
  mainContent.style.display = "none";
  aboutUs.style.display = "none";
  contactUs.style.display = "block";
}

// Load Home Content
function loadHome() {
  mainContent.style.display = "block";
  aboutUs.style.display = "none";
  contactUs.style.display = "none";
}

// Search Functionality
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === "beach") {
    mainContent.innerHTML = `
      <h2>Recommended Beaches</h2>
      <div>
        <h3>Maldives</h3>
        <p>A paradise of turquoise waters and white sandy beaches.</p>
        <img src="beach.jpg" alt="Maldives">
      </div>
      <div>
        <h3>Goa</h3>
        <p>India's ultimate beach destination with lively culture.</p>
        <img src="https://tse4.mm.bing.net/th?id=OIP.euV7CrNJeXDDX0-2XsmDPwHaE8&pid=Api&P=0&h=180" alt="Goa">
      </div>
    `;
  } else if (query === "temple") {
    mainContent.innerHTML = `
      <h2>Recommended Temples</h2>
      <div>
        <h3>Angkor Wat</h3>
        <p>Magnificent ancient temple in Cambodia.</p>
        <img src="https://tse1.mm.bing.net/th?id=OIP.BVmhaxpzNRyaxmGoVLj-CAHaE8&pid=Api&P=0&h=180" alt="Angkor Wat">
      </div>
      <div>
        <h3>Meenakshi Temple</h3>
        <p>Famous temple in Tamil Nadu, India.</p>
        <img src="temple.jpg" alt="Meenakshi Temple">
      </div>
    `;
  } else if (query === "country") {
    mainContent.innerHTML = `
      <h2>Recommended Countries</h2>
      <div>
        <h3>Switzerland</h3>
        <p>Known for its stunning Alps and scenic beauty.</p>
        <img src="https://tse2.mm.bing.net/th?id=OIP.8jJLo_0ofozuwIe219kiTgHaFi&pid=Api&P=0&h=180" alt="Switzerland">
      </div>
      <div>
        <h3>Japan</h3>
        <p>A country of tradition, technology, and cherry blossoms.</p>
        <img src="country.jpg"  alt="Japan">
      </div>
    `;
  } else {
    mainContent.innerHTML = `
      <h2>No Results Found</h2>
      <p>Try searching for "beach," "temple," or "country."</p>
    `;
  }
}

// Clear Search Results
function clearSearch() {
  searchInput.value = "";
  mainContent.innerHTML = `<h1>Explore Dream Destinations</h1>
  <p>Plan, explore, and book your dream vacations with ease. Discover unique destinations and enjoy seamless travel experiences!</p>
  <button id="bookNow">Book Now</button>`;
  
}


// Event Listeners
homeLink.addEventListener("click", loadHome);
aboutLink.addEventListener("click", loadAbout);
contactLink.addEventListener("click", loadContact);
btnSearch.addEventListener("click", performSearch);
btnClear.addEventListener("click", clearSearch);

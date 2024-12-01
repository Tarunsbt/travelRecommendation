// Elements
const mainContent = document.getElementById("mainContent");
const homeLink = document.getElementById("homeLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");

// Load Home Content
function loadHome() {
  mainContent.innerHTML = 
    "<h1>Explore Dream Destinations</h1>" +
    "<p>Plan, explore, and book your dream vacations with ease. Discover unique destinations and enjoy seamless travel experiences!</p>" +
    "<button id='bookNow'>Book Now</button>";
}

// Load About Us Content
function loadAbout() {
  mainContent.innerHTML = 
    "<h1>About TravelBloom</h1>" +
    "<p>TravelBloom is your travel companion for exploring dream destinations.</p>" +
    "<h2>Meet Our Team</h2>" +
    "<ul>" +
      "<li>John Doe - CEO</li>" +
      "<li>Jane Smith - Marketing Head</li>" +
      "<li>Emily Davis - Travel Consultant</li>" +
    "</ul>";
}

// Load Contact Us Content
function loadContact() {
  mainContent.innerHTML = 
    "<h1>Contact Us</h1>" +
    "<form>" +
      "<label for='name'>Name:</label>" +
      "<input type='text' id='name' placeholder='Enter your name'>" +
      "<label for='email'>Email:</label>" +
      "<input type='email' id='email' placeholder='Enter your email'>" +
      "<label for='message'>Message:</label>" +
      "<textarea id='message' placeholder='Write your message'></textarea>" +
      "<button type='submit'>Submit</button>" +
    "</form>";
}

// Search Functionality
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query === "beach") {
    mainContent.innerHTML = 
      "<h2>Recommended Beaches</h2>" +
      "<div>" +
        "<h3>Maldives</h3>" +
        "<p>A paradise of turquoise waters and white sandy beaches.</p>" +
        "<img src='maldives.jpg' alt='Maldives' style='width:100%; max-height:200px;'>" +
      "</div>" +
      "<div>" +
        "<h3>Goa</h3>" +
        "<p>India's ultimate beach destination with lively culture.</p>" +
        "<img src='goa.jpg' alt='Goa' style='width:100%; max-height:200px;'>" +
      "</div>";
  } else if (query === "temple") {
    mainContent.innerHTML = 
      "<h2>Recommended Temples</h2>" +
      "<div>" +
        "<h3>Angkor Wat</h3>" +
        "<p>Magnificent ancient temple in Cambodia.</p>" +
        "<img src='angkorwat.jpg' alt='Angkor Wat' style='width:100%; max-height:200px;'>" +
      "</div>" +
      "<div>" +
        "<h3>Meenakshi Temple</h3>" +
        "<p>Famous temple in Tamil Nadu, India.</p>" +
        "<img src='meenakshi.jpg' alt='Meenakshi Temple' style='width:100%; max-height:200px;'>" +
      "</div>";
  } else if (query === "country") {
    mainContent.innerHTML = 
      "<h2>Recommended Countries</h2>" +
      "<div>" +
        "<h3>Switzerland</h3>" +
        "<p>Known for its stunning Alps and scenic beauty.</p>" +
        "<img src='switzerland.jpg' alt='Switzerland' style='width:100%; max-height:200px;'>" +
      "</div>" +
      "<div>" +
        "<h3>Japan</h3>" +
        "<p>A country of tradition, technology, and cherry blossoms.</p>" +
        "<img src='japan.jpg' alt='Japan' style='width:100%; max-height:200px;'>" +
      "</div>";
  } else {
    mainContent.innerHTML = 
      "<h2>No Results Found</h2>" +
      "<p>Try searching for 'beach,' 'temple,' or 'country.'</p>";
  }
}

// Clear Search Results
function clearSearch() {
  searchInput.value = "";
  mainContent.innerHTML = "<p>Cleared search results. Please search again.</p>";
}

// Event Listeners
homeLink.addEventListener("click", loadHome);
aboutLink.addEventListener("click", loadAbout);
contactLink.addEventListener("click", loadContact);
btnSearch.addEventListener("click", performSearch);
btnClear.addEventListener("click", clearSearch);

// Load Home Content by Default
loadHome();

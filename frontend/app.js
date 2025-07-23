const form = document.getElementById("greet-form"); // greet-form wala element ko input lai select garcha
const nameInput = document.getElementById("name-input"); // name-input element ma bhayeko input lai select garcha
const responseBox = document.getElementById("response"); // response box lai select garirako cha

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Normal default tarika le run nahos hamile custom function dincham run huna

  const style     = e.submitter.value;           // "nice"  |  "hate"
  // const endpoint  = style === "hate" ? "/api/hate" : "/api/greet";   // end point specify garincha as per event ko submitter ma k value aaucha i. style = e.submitter.value ma k value aaucha
  var endpoint = '/api/love'
  if(style === 'hate')
  {
    endpoint = '/api/hate'
  } 

  else if(style === 'like')
  {
    endpoint = '/api/love'
  }
  // Build the request body
  const data = { name: nameInput.value };
  // const API_URL = "https://ajax-demo-green.vercel.app";
  const API_URL = "https://ajax-demo-sand.vercel.app/"
  // const API_URL = "http://localhost:8000"; // Local FastAPI server

  try {
    // POST to FastAPI
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    responseBox.textContent = json.message; face  // “Hello, …!”
  } catch (err) {
    responseBox.textContent = "Server unreachable 😢";
    console.error(err);
  }
});
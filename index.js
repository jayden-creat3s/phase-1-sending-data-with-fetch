// Function to submit data
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ name, email }),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `User  ID: ${data.id}`;
        })
        .catch(error => {
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `Error: ${error.message}`;
        });
}

// Event listener for form submission
document.getElementById("dogForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const dogName = document.getElementById("dogName").value;
    const dogBreed = document.getElementById("dogBreed").value;

    submitData(dogName, dogBreed);
});

// Remove the main element if it exists
const mainElement = document.getElementById("main");
if (mainElement) {
    mainElement.remove();
}

// Create a new header
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your actual name
document.body.append(newHeader);


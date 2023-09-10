const axios = require('axios');

// Define the registration data
const registrationData = {
  companyName: "Train Central",
  ownerName: "Ram",
  rollNo: "1",
  ownerEmail: "ram@abc.edu",
  accessCode: "FKDLig"
};

// Define the API endpoint URL
const registrationURL = "http://20.244.56.144/train/register";

// Make the POST request to register your company
axios.post(registrationURL, registrationData)
  .then(response => {
    if (response.status === 200) {
      // Registration was successful, retrieve the clientID and clientSecret
      const registrationResult = response.data;
      const clientID = registrationResult.clientID;
      const clientSecret = registrationResult.clientSecret;

      console.log("Registration successful.");
      console.log(`Client ID: ${clientID}`);
      console.log(`Client Secret: ${clientSecret}`);
    } else {
      // Registration failed, print an error message
      console.error("Company registration failed. Please check the data and try again.");
    }
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error("An error occurred:", error);
  });
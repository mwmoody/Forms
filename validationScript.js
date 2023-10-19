	// Retrieve the input field value
	const inputField = document.getElementById('inputField');
	
	const form = document.getElementById('myForm');
	form.addEventListener('submit', validateForm);

	// Function to validate the form
    function validateForm(event){
  	event.preventDefault(); // Prevent form from submitting

  	const errorMessage = document.getElementById('errorMessage');
  	if (errorMessage){
    	errorMessage.remove();
  	}
  	const inputValue = inputField.value.trim();
  	const alphanumericPattern = /^[a-zA-Z0-9]+$/;

      	// Check if the input value matches the pattern
	if (alphanumericPattern.test(inputValue)){

    	// Valid input: display confirmation and submit the form
    	alert('Form submitted successfully!');
    	resetForm();
  	}
	else{

    	// Invalid input: display error message
   	const errorMessage = document.createElement('p');
    	errorMessage.id = 'errorMessage';
    	errorMessage.innerText = 'Alphanumeric Characters Only!';
    	form.appendChild(errorMessage);
  	}
    }
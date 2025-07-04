function calculateArea() {
    //Get width and height values from inputs
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    //Validation: check if inputs are numbers and positive
    if(isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid, positive number ';
        return;
    }

    // Calculate area
    const area = width * height;

    //Display Results with two decimal places
    document.getElementById('result').textContent = `The area of the rectangle is ${area.toFixed(2)} square units`
}

function resetFields() {
    //Clear input fields and result display
    document.getElementById('width').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').value = '';
}
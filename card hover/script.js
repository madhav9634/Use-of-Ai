// JavaScript to handle checkbox interaction
document.getElementById('checkbox').addEventListener('change', function() {
    const messageElement = document.getElementById('message');

    // Check if checkbox is checked
    if (this.checked) {
        messageElement.textContent = "Checkbox clicked successfully!";
    } else {
        messageElement.textContent = "";
    }
});

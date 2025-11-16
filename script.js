// Get the modal element
var modal = document.getElementById("myModal");

// Function to show the modal
function showModal() {
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

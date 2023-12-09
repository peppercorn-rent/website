document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileField = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('file', fileField.files[0]);

    fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
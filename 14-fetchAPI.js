
fetch('https://imgs.search.brave.com/hZ0STey2DGCvuC5NoaXYHEy4i56zKq0KdbfTY62dK9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jbG9zZS11cC1k/ZS11bS1nYXRvLXVz/YW5kby1vY3Vsb3Mt/ZGUtc29sLWVucXVh/bnRvLWVzdGEtc2Vu/dGFkby1jb250cmEt/dW0tZnVuZG8tcHJl/dG9fMTA0ODk0NC0y/NjQ5MzQ2Mi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw')
.then(response => response.blob())
.then(imageBlob => {
    // Create a local URL of the image
    const imageObjectURL = URL.createObjectURL(imageBlob);
    
    // Create an image element and set its source to the local URL
    const imgElement = document.createElement("img");
    imgElement.src = imageObjectURL;
    
    // Append the image to the body or any other container
    document.body.appendChild(imgElement);
});
fetch('https://imgs.search.brave.com/D-RohMTvYa1XIY4dbOgI6NF6RT_AD6JeMnSANycAXWA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9jbG9zZS11cC1k/ZS11bS1nYXRvLXVz/YW5kby1vY3Vsb3Mt/ZGUtc29sXzEwNDg5/NDQtMTQ2MDI5NDQu/anBnP3NlbXQ9YWlz/X2h5YnJpZA')
.then(response => response.blob())
.then(imageBlob => {
    // Create a local URL of the image
    const imageObjectURL = URL.createObjectURL(imageBlob);
    
    // Create an image element and set its source to the local URL
    const imgElement = document.createElement("img");
    imgElement.src = imageObjectURL;
    
    // Append the image to the body or any other container
    document.body.appendChild(imgElement);
});

const form = document.querySelector("form");
API_URL = "http://localhost:5000/details";

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('submited');

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    const content = {
        email,
        password
    };

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(content),
        headers: {
            "content-type": "application/json"
        }
    });
});
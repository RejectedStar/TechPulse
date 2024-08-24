const db = firebase.firestore();
const functions = firebase.functions();

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const selectedBlogs = Array.from(document.querySelectorAll('input[name="blogs"]:checked'))
                                .map(el => el.value);

    db.collection('users').add({
        email: email,
        blogs: selectedBlogs
    })
    .then(() => {
        document.getElementById('message').innerText = 'You have successfully signed up!';
        document.getElementById('signup-form').reset();
    })
    .catch((error) => {
        console.error('Error writing document: ', error);
        document.getElementById('message').innerText = 'An error occurred. Please try again.';
    });
});


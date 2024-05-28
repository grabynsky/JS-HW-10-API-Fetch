document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    const url = 'https://jsonplaceholder.typicode.com/users';

    if (userId) {
        fetch(`${url}/${userId}`)
            .then(response => response.json())
            .then(user => {
                const userDetails = document.getElementById("user-details");
                userDetails.innerHTML = `
                            <p><strong>ID:</strong> ${user.id}</p>
                            <p><strong>Name:</strong> ${user.name}</p>
                            <p><strong>Login:</strong> ${user.username}</p>
                            <p><strong>E-mail:</strong> ${user.email}</p>
                            <p><strong>Adress:</strong></p>
                            <ul>
                                <li><strong>Street:</strong> ${user.address.street}</li>
                                <li><strong>Room:</strong> ${user.address.suite}</li>
                                <li><strong>City:</strong> ${user.address.city}</li>
                                <li><strong>Zip code:</strong> ${user.address.zipcode}</li>
                                <li><strong>Geo:</strong>
                                    <ul>
                                        <li><strong>Latitude:</strong> ${user.address.geo.lat}</li>
                                        <li><strong>Longitude:</strong> ${user.address.geo.lng}</li>
                                    </ul>
                                </li>
                            </ul>
                            <p><strong>Telephone:</strong> ${user.phone}</p>
                            <p><strong>Web-site:</strong> ${user.website}</p>
                            <p><strong>Company:</strong></p>
                            <ul>
                                <li><strong>Name:</strong> ${user.company.name}</li>
                                <li><strong>Carth Phrase:</strong> ${user.company.catchPhrase}</li>
                                <li><strong>BS:</strong> ${user.company.bs}</li>
                            </ul>
                        `;
            })
            .catch(error => {
                console.error('Error getting user details', error);
            });
    } else {
        document.getElementById("user-details").textContent = "No user ID specified";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");

    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(response => response.json())
        .then(users => {
            users.map(user => {
                const listItem = document.createElement('li');
                const userLink = document.createElement('a');

                userLink.href = `user-details.html?id=${user.id}`;
                userLink.textContent = `${user.id} - ${user.name}`;
                listItem.style.listStyleType = 'none';
                
                listItem.appendChild(userLink);
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error getting users', error);
        });
});
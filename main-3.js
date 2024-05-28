// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX
//     (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про
// користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX
// де ХХХ - айді користувача)

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response=> response.json())
    .then(data => {
        
        // data.map(({id, name}) => {
        //     console.log()
        //     // <a href='user-details.html?id=`${id}`'>name</a>
        //     console.log(id, name)            
        // })
        data.map((item) => {
            console.log(item)
            // <a href='user-details.html?id=`${id}`'>name</a>
            // console.log(id, name)
        })
        console.log(data)
    })
fetch('https://jsonplaceholder.typicode.com/users?userId=1')
    .then((response) => response.json())
    .then((json) => console.log(json));
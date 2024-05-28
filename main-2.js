// - взяти https://dummyjson.com/docs/recipes т
// а вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.

const recipesInfo = document.getElementById('recipesInfo');

const url = 'https://dummyjson.com/recipes';

fetch(url)
.then(response=> response.json())
.then(({recipes})=>{
    
    recipes.map(recipe => {
        const divRecipe = document.createElement('div');
        const ul = document.createElement('ul');
       
        console.log(recipe.ingredients)
        
        divRecipe.innerHTML = `
        <b>Name:</b> ${recipe.name} 
        `;
        
        for (const ingredient of recipe.ingredients) {
            const li = document.createElement('li');
            li.innerText = ingredient;
            ul.appendChild(li);
        }
        
        divRecipe.appendChild(ul);
        recipesInfo.appendChild(divRecipe);
        console.log(recipe)
    })
})
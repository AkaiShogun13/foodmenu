const recipeData = [
    {
        image: "images/oriental-salad.jpg",
        name: "Oriental Salad",
        ingredients: "potatoes, eggs, fish, peppers, red onion,  olives,  radish,  pickles,  mayo,  white vinegar"
    },
    {
        image: "images/moussaka.jpg",
        name: "Moussaka & Salad(+feta)",
        ingredients: "aubergine, mushrooms, onions, 3 potatoes, quorn mince, flour, butter, milk, oregano"
    },
    {
        image: "images/lamb-steak.jpg",
        name: "Lamb steaks & Garlic mash",
        ingredients: "3 lamb steaks, 1 quorn mozzarela-pesto, potatoes, garlic, carrots, red currant jelly"
    },
    {
        image: "images/veggie-butter-chicken.jpg",
        name: "Veggie loaded butter chicken",
        ingredients: "cauliflower, carrots, olive oil, onion/shallots, garlic, 2tsp grated ginger, 2tbs butter chicken spice blend, ¼ tsp cumin, ¼ tsp coriander, ½ tsp turmeric, 2 tins chopped tomatoes, 150gms green beans, 600gms chicken breast, greek yoghurt, 200gms baby spinach"
    },
    {
        image: "images/roast-beef.jpg",
        name: "Roast Beef",
        ingredients: "sirloin, potatoes, carrots, chard, yorkshire pudding"
    },
    {
        image: "images/kedgeree.jpg",
        name: "Kedgree",
        ingredients: "smoked mackeral, rice"
    },
    {
        image: "images/chicken-pie.jpg",
        name: "Chicken Pie",
        ingredients: "chicken left-overs, bacon, leeks, cream, parsnips, cabbage"
    },
    {
        image: "images/sea-bass.jpg",
        name: "Sea bass & mash",
        ingredients: "sea bass, potatoes, broccoli"
    },
    {
        image: "images/roasted-chicken.jpg",
        name: "Roasted chicken & roasted vegetables",
        ingredients: "whole chicken, potatoes, carrots parsnips, stuffing, gravy"
    },
    {
        image: "images/lemon-sole.jpg",
        name: "Lemon sole & Lyonnaise potatoes",
        ingredients: "4 sole, parsley, potatoes, savoy cabbage"
    },
    {
        image:"",
        name: "Bill's beef",
        ingredients: ""
    },
    {
        image:"images/tofu-brocoli.jpg",
        name: "Tofu & broccoli rice bowl",
        ingredients: "rice, firm tofu, broccoli, garlic, ginger, sesame seeds, 3tbs soy sauce, 2tbs chinese cooking wine, 2tbs hoisin, 1tbs honey, 1tbs sesame oil, 4-6tbs chicken stock, 1tbs corn starch"
    },
    {
        image:"images/chicken-tortilla-salad.jpg",
        name: "Chrispy chicken & tortilla salad",
        ingredients: "chicken breast, fresh corn tortillas, 1 avocado, coriander, 1 clove garlic, 2 limes, 1tbs oil, radish, cucumber, pea shoots, greens(customizable)"
    },
    {
        image:"images/peanut-noodles.jpg",
        name: "Peanut noodles",
        ingredients: "3tbs peanut butter, 2-3tbs chilly paste, 3tbs soy sauce, 1tbs honey, 1tbs sesame oil, 1 lime/vinegar, 1tbs garlic, 1tbs ginger, 6tbs water, button mushrooms, purple cabage leaves, coriander, spring onions, soba noodles "
    },

];

const nameEl = document.getElementById("name")
const ingredientsEl = document.getElementById("ingredients")
const imageEl = document.getElementById("recipe-img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");


let currentRecipe = 0;

loadRecipe();

function loadRecipe() {
    const currentRecipeData = recipeData [currentRecipe];

    nameEl.innerText = currentRecipeData.name;
    ingredientsEl.innerText = currentRecipeData.ingredients;
    imageEl.src = currentRecipeData.image;
};

function searchRecipes () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const matchingRecipe = recipeData.find(recipe => recipe.name.toLowerCase().includes(searchTerm));

    if (matchingRecipe) {
        const recipeElement = document.createElement("div");
        recipeElement.innerHTML = `
            <img src="${matchingRecipe.image}">
            <h2>${matchingRecipe.name}</h2>
            <p>${matchingRecipe.ingredients}</p>
        `;

        searchResult.innerHTML =  "";
        searchResult.appendChild(recipeElement);
    } else {
        searchResult.innerHTML == "<p>No matching recipe found.</p>"
    }

    searchInput.value = "";
};

searchBtn.addEventListener("click", searchRecipes); 
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchRecipes();
    }
})

nextBtn.addEventListener("click", () => {
    currentRecipe++
    if (currentRecipe < recipeData.length) {
        loadRecipe()
    }
});

prevBtn.addEventListener("click", () => {
    currentRecipe--
    loadRecipe()
})
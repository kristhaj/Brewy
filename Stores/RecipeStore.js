import { observable , action} from 'mobx';

class RecipeStore {
    @observable recipes = [];
    @observable recipeIDList = [];
    @observable URL;

    constructor() {
        //api endpoint for getting a single recipe
        this.URL = "https://api.brewersfriend.com/v1/recipes/";
    }

    @action fetchRecipeDataAsync = (recipeIDindex) => {
        //TODO make a store for API keys so anyone can use it with their personal key, and not rely upon this one
        const apiKey = "cd138a938274f356b6e0f9d28fb91dedae6a35eb";
        const urlParam = this.recipeIDList[recipeIDindex];

        try {
            //TODO push the desired data from the response into recipes list
            const data = await getData(this.URL + urlParam, apiKey)
            console.log(JSON.stringify(data));
        } catch(e) {
            console.error("HTTP error: " + e);
        }
    }

    getData = (url, key) => {
        //simple GET request for one single recipe
        const response = await fetch(url+urlParam, {
            method: "GET",
            headers: {
                "X-API-KEY": key
            },
            body: JSON.stringify(data)

        });
        return await response.json();
    }

    @action setTargetID = (recipeURL) => {
        //select the recipe's ID from the given URL in the form of: https://www.brewersfriend.com/homebrew/recipe/view/ID/recipe-name
        const recipeID = recipeURL.split("/")[6];
        this.recipeIDList.push(recipeID);
    }

}

const store = new RecipeStore();
export default store;
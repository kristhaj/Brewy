import { observable } from 'mobx';

class RecipeStore {
    @observable recipes = [];
}

const store = new RecipeStore();
export default store;
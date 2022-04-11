import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const RecipiesContext = createContext([]);

export const GeneralProvider = ({children}) => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [recipeToSearch, setRecipeToSearch] = useState("chicken");

    const CallApi = async() => {
        const req = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${recipeToSearch}&app_id=954b9052&app_key=%20f7a5bbdb740916cd6457971923676d01`);
        setAllRecipes(req.data.hits);
    }

    useEffect(() => {
        CallApi()
    }, [recipeToSearch])

    const data = {
        allRecipes: allRecipes,
        recipeToSearch: recipeToSearch,
        setRecipeToSearch: setRecipeToSearch
    };

    return (
        <RecipiesContext.Provider value={data}>
            {children}
        </RecipiesContext.Provider>
    )
}
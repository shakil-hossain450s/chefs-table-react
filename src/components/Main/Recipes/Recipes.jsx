import { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("./recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <SectionHeading></SectionHeading>
            <div className='grid grid-cols-3 gap-6'>
                <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.id}
                            recipe={recipe}
                        ></Recipe>)
                    }
                </div>
                <div className='col-span-1 border'>
                    <h2>Cooking Info</h2>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
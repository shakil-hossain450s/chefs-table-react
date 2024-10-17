import { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Recipe from '../Recipe/Recipe';
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
import toast, { Toaster } from 'react-hot-toast';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    useEffect(() => {
        fetch("./recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = (recipe) => {
        const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
        if (!isExist) {
            const newItem = [...wantToCook, recipe];
            setWantToCook(newItem);
            toast.success("Added Successfully");
        } else {
            toast.error("Already Exist");
           
        }
    }
    console.log(wantToCook);
    return (
        <div>
            <SectionHeading></SectionHeading>
            <div className='grid grid-cols-5 gap-6'>
                <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        recipes.map(recipe => <Recipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className='col-span-2 border border-[#28282833] p-4 rounded-2xl h-fit'>
                    <WantToCook
                        wantToCook={wantToCook}
                    ></WantToCook>
                    <CurrentlyCooking></CurrentlyCooking>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Recipes;
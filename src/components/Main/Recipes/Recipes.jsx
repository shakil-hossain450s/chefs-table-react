import { useEffect, useState } from 'react';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Recipe from '../Recipe/Recipe';
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
import toast, { Toaster } from 'react-hot-toast';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    useEffect(() => {
        fetch("./recipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const handleWantToCook = (recipe, recipe_name) => {
        const isExist = wantToCook.find(item => item.recipe_id === recipe.recipe_id);
        if (!isExist) {
            const newItem = [...wantToCook, recipe];
            setWantToCook(newItem);
            toast.success(`${recipe_name} added Successfully`);
        } else {
            toast.error(`${recipe_name} already Exist`);
           
        }
    }

    const handleCurrentlyCooking = (id, recipe_name) => {
        const remainingWantToCook = wantToCook.filter(recipe => recipe.recipe_id !== id);
        setWantToCook(remainingWantToCook);

        const preparing = wantToCook.find(recipe => recipe.recipe_id === id);
        const newPreparing = [...currentlyCooking, preparing];
        setCurrentlyCooking(newPreparing);
        toast.success(`Preparing ${recipe_name}`)
        
    }

    console.log(currentlyCooking)

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
                        handleCurrentlyCooking={handleCurrentlyCooking}
                    ></WantToCook>
                    <CurrentlyCooking 
                        currentlyCooking={currentlyCooking}
                    ></CurrentlyCooking>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Recipes;
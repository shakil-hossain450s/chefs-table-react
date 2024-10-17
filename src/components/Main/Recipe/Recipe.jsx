import PropTypes from 'prop-types';
import { AiOutlineFire } from 'react-icons/ai';
import { IoTimeOutline } from 'react-icons/io5';

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_image, recipe_name, short_description: recipe_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className='card border border-[#28282833] p-4 rounded-2xl'>
            <figure className='rounded-2xl h-48 mb-3 lg:mb-6'>
                <img
                    src={recipe_image}
                    alt={`recipe image of ${recipe_name}`} />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-xl font-semibold text-[#282828] mb-4">{recipe_name}</h2>
                <p>{recipe_description}</p>
                <div className='mt-4'>
                    <h2>Ingredients: <span className='font-semibold'>{ingredients.length}</span></h2>
                    <ul className='ml-8 mt-2'>
                        {
                            ingredients.map((ingredient, idx) => <li key={idx} className='list-disc text-sm text-[#878787]'>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className='py-6 flex items-center gap-4 text-[#282828CC]'>
                    <p className='flex items-center gap-1'>
                        <IoTimeOutline className='text-2xl'></IoTimeOutline>
                        {preparing_time} minutes</p>
                    <p className='flex items-center gap-1'>
                        <AiOutlineFire className='text-2xl'></AiOutlineFire>
                        {calories} calories</p>
                </div>
                <div className="card-actions">
                    <button
                        onClick={() => handleWantToCook(recipe, recipe_name)}
                        className="btn text-[#150B2B] bg-[#0BE58A] hover:bg-[#0BE58A] rounded-full border-0 px-6">
                        Want to Cook
                    </button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipe;
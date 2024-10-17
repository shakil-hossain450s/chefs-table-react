import PropTypes from 'prop-types';

const CurrentlyCooking = ({ currentlyCooking }) => {
    return (
        <div className="text-center mt-8">
            <h1 className="text-xl text-[#282828] mb-1">Currently cooking: {currentlyCooking.length}</h1>
            <div className="border border-[#28282826] w-4/5 mx-auto mb-6"></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            currentlyCooking.map((recipe, idx) => <tr className='text-[#282828B2] text-sm' key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    currentlyCooking: PropTypes.array.isRequired
}

export default CurrentlyCooking;
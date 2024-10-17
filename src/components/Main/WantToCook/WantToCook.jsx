import PropTypes from 'prop-types';

const WantToCook = ({ wantToCook }) => {
    return (
        <div className="text-center">
            <h1 className="text-xl text-[#282828] mb-1">Want To Cook: {wantToCook.length}</h1>
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            wantToCook.map((recipe, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time} minutes</td>
                                <td>{recipe.calories} calories</td>
                                <td>
                                    <button className="btn btn-sm text-[#150B2B] bg-[#0BE58A] hover:bg-[#0BE58A] rounded-full border-0">
                                        Preparing
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.array.isRequired
}

export default WantToCook;
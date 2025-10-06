import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p className="text-xl text-gray-600">Recipe not found.</p>
        <Link to="/" className="text-indigo-500 hover:text-indigo-700 mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 md:h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
              <ul className="list-disc list-inside bg-gray-50 p-4 rounded-md">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700 mb-2">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
              <ol className="list-decimal list-inside bg-gray-50 p-4 rounded-md">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-gray-700 mb-3 leading-relaxed">{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition-colors duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
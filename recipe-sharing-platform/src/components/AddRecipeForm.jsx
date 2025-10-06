import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients, separated by commas.';
    }
    if (!instructions.trim()) newErrors.instructions = 'Instructions are required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would handle the form submission,
      // e.g., send data to an API and update the global state.
      console.log({
        title,
        ingredients: ingredients.split(',').map(item => item.trim()),
        instructions: instructions.split('\n').map(item => item.trim()),
      });
      alert('Recipe submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">Ingredients</label>
            <textarea
              id="ingredients"
              rows="5"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients, separated by commas"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.ingredients ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'}`}
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">Instructions</label>
            <textarea
              id="instructions"
              rows="8"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter preparation steps, one per line"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.instructions ? 'border-red-500 focus:ring-red-300' : 'focus:ring-indigo-300'}`}
            ></textarea>
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 px-6 rounded-full hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;

const API_BASE_URL = 'https://api.github.com';

export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/users?q=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};
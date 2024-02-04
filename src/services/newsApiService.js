// newsApiService.js
import axios from 'axios';

const newsApiService = axios.create({
  baseURL: 'https://newsapi.org', // Use the full API base URL
  params: {
    q: 'indonesia',
    apiKey: '7eaf31ff07674926a2926a8aa57799f8', // Replace with your actual API key
  },
});

export const getTopHeadlines = async () => {
  try {
    const response = await newsApiService.get('/v2/everything');
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

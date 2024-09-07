const API_URL = 'http://localhost:3001/api/travel'; // Update with your backend URL

export const searchTrips = async (searchParams) => {
  const response = await fetch(`${API_URL}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchParams),
  });
  const data = await response.json();
  return data;
};

export const getJwtToken = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.token;
};

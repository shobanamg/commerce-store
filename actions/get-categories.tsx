const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export default getCategories;

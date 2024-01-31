export const fetchImage = async (index) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    if (!response.ok) {
      throw new Error("Network response was not ok ");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    {
      console.log(error);
    }
  }
};

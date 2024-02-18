import axios from "axios";

export interface ICatImage {
  id: string;
  uniqueId: string;
  url: string;
}

export const fetchCards = async (): Promise<ICatImage[]> => {
  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=6&size=small"
    );
    return response.data.map((img: { id: string; url: string }) => ({
      id: img.id,
      url: img.url,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

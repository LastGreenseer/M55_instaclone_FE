const UNSPLASH_API_URL = "https://api.unsplash.com";
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async () => {
  const res = await fetch(`${UNSPLASH_API_URL}/photos`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
  });

  if (!response.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error");
  }

  const data = await res.json();
  return data;
};

const API_URL = "http://localhost:5001";

const getAuthToken = () => localStorage.getItem("jwt")

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  const data = await response.json()
  return data
};

export const registerUser = async (username, email, password) => {
  console.log("hello register user");
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await handleResponse(response);
  console.log(data);
  return data;
};

export const login = async (username, password) => {
  
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await handleResponse(response);
    localStorage.setItem("jwt", data.token)
    return data
  }


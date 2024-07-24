const API_URL = "http://localhost:5001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

 const data =  response.json();
 return data
};

export const registerUser = async (username, email, password) => {
  console.log ("hello register user")
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await handleResponse(response);
  console.log(data)
  return data
};

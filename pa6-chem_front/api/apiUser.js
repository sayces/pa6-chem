const API_URL = "http://localhost:5002/api" ?? "http://localhost:5000/api";

export async function getUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      console.log("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteUser(id) {
  const response = await fetch(`${API_URL}/users/remove/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

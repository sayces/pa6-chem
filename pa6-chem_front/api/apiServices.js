const API_URL = "http://localhost:5002/api" ?? "http://localhost:5000/api";

export async function getAllServices() {
  try {
    const response = await fetch(`${API_URL}/services`, {
      method: "GET",
    });
    console.log('services response',response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
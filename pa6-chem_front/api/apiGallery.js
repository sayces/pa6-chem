const API_URL = "http://localhost:5002/api" ?? "http://localhost:5000/api";

export async function deleteImage(id) {
  try {
    const response = await fetch(`${API_URL}/gallery/remove/${id}`, {
      method: "DELETE",
    }); 
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
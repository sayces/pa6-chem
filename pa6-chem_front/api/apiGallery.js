

const API_URL = "http://localhost:5002/api" ?? "http://localhost:5000/api";

export async function deleteImage(id) {
  try {
    const response = await fetch(`${API_URL}/gallery/remove/${id}`, {
      method: "DELETE",
    });
    response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_URL}/gallery/posts`, {
      method: "GET",
    });
    console.log('posts response',response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getAllImages() {
  try {
    const response = await fetch(`${API_URL}/gallery/images`, {
      method: "GET",
    });
    console.log('images response',response);
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export async function uploadImage(formData) {
  try {
    const response = await fetch(`${API_URL}/gallery/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Ошибка загрузки файла");
    }
    response.json();
  } catch (error) {
    console.error(error);
  }
}

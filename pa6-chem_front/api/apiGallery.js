const API_URL = "http://localhost:5002/api" ?? "http://localhost:5000/api";

// import { postData } from "../src/components/imageUpload/ImageUpload.tsx"  


export async function deleteImage(id) {
  try {
    const response = await fetch(`${API_URL}/gallery/images/remove/${id}`, {
      method: "DELETE",
    });
    response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(id) {
  try {
    const response = await fetch(`${API_URL}/gallery/posts/remove/${id}`, {
      method: "DELETE",
    });
    response.json();
  } catch (err) {
    console.log(err)
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
    const response = await fetch(`${API_URL}/gallery/images/upload`, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Получаем текст ошибки от сервера
      throw new Error(`Ошибка загрузки: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    
    console.log("Файл загружен:", data);
    return data;
  } catch (error) {
    console.error( error.message);
  }
}

export async function createPost(postData) {
  try {
    const response = await fetch(`${API_URL}/gallery/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // Даем понять серверу, что передаем JSON
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      const errorText = await response.text(); // Получаем текст ошибки от сервера
      throw new Error(`Ошибка загрузки: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    console.log("Пост загружен:", data);
    return data;
  } catch (error) {
    console.error( error.message);
  }
}

export async function getPostById(id) {
  try {
    const response = await fetch(`${API_URL}/gallery/posts-by-id/${id}`, {
      method: "GET",
    });
    console.log('posts-user response',response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPostsWithAuthor() {
  try {
    const response = await fetch(`${API_URL}/gallery/posts-author`, {
      method: "GET",
    });
    console.log('posts-author response',response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
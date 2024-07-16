const BASE_URL = "http://localhost:8000/api"; // Replace with your backend API base URL

export const deleteFile = async (userName, fileName, setDeleteStatus) => {
  try {
    const response = await fetch(`${BASE_URL}/delete-files/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: userName,
        files_to_delete: fileName, // Assuming fileName is a string or array of file names to delete
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Delete successful:", data.message);
      setDeleteStatus("success");
    } else {
      const data = await response.json();
      console.error("Delete failed:", data.message);
      setDeleteStatus("fail");
    }
  } catch (error) {
    console.error("Delete failed:", error);
    setDeleteStatus("fail");
  }
};

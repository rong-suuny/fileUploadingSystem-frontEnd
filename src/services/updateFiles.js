export const updateFiles = async (userName, file, setStatus, setFiles) => {
  if (file && userName) {
    setStatus("updating");

    const formData = new FormData();
    formData.append("user_name", userName);
    Array.from(file).forEach((file) => {
      formData.append("file", file);
    });
    try {
      const response = await fetch(
        `http://localhost:8000/api/files/file-update/`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json(); // Parse response body as JSON

      if (response.ok) {
        setStatus("success");
        setFiles(null); // Clear files after successful upload
      } else {
        setStatus("fail");
        console.error("Upload failed:", data.message);
      }
    } catch (error) {
      console.error(error);
      setStatus("fail");
    }
  }
};

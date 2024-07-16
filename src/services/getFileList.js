const BASE_URL = "http://localhost:8000/api"; // Replace with your backend API base URL

export const getFileList = async (
  userName,
  files,
  setgetFileListStatus,
  setFiles
) => {
  try {
    const response = await fetch(`${BASE_URL}/files-list/`, {
      method: "GET",
    });
    const data = await response.json();
    setFiles(data.files);
    setgetFileListStatus("success");
  } catch (error) {
    console.error("Failed to fetch file list:", error);
    setgetFileListStatus("fail");
  }
};

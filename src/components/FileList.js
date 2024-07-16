import React from "react";
import { getFileList } from "../services/getFileList";

const FileList = ({
  userName,
  files,
  fileList,
  getFileListStatus,
  setGetFileListStatus,
  setFiles,
}) => {
  return (
    <div className="mb-2">
      Get Files
      <button
        onClick={() =>
          getFileList(userName, files, setGetFileListStatus, setFiles)
        }
        className="btn btn-secondary"
        style={{ margin: "0 10px", fontSize: "1rem" }}
      >
        Get File List
      </button>
      {getFileListStatus === "success" && (
        <div className="mt-2">
          <h5>File List:</h5>
          <ul>
            {fileList.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      {getFileListStatus === "fail" && (
        <p className="text-danger mt-2">❌ Failed to get file list!</p>
      )}
    </div>
  );
};

export default FileList;

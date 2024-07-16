import React, { useState } from "react";
import { deleteFile } from "../services/deleteFile";

const FileDelete = ({ userName, deleteStatus, setDeleteStatus }) => {
  const [filesToDelete, setFilesToDelete] = useState("");

  const handleDeleteFiles = () => {
    const fileNames = filesToDelete.split(",").map((name) => name.trim());
    deleteFile(userName, fileNames, setDeleteStatus);
  };

  return (
    <div>
      <div>
        <label htmlFor="filesToDelete" className="mb-2">
          Enter file names to delete (comma separated):
        </label>
        <input
          type="text"
          id="filesToDelete"
          value={filesToDelete}
          onChange={(e) => setFilesToDelete(e.target.value)}
          className="form-control"
          placeholder="file1.txt, file2.jpg"
        />
      </div>
      <button
        onClick={handleDeleteFiles}
        className="btn btn-danger mt-2"
        disabled={!filesToDelete}
        style={{ margin: "0 10px", fontSize: "1rem" }}
      >
        Delete Files
      </button>
      {deleteStatus === "success" && (
        <p className="text-success mt-2">✅ Deleted successfully!</p>
      )}
      {deleteStatus === "fail" && (
        <p className="text-danger mt-2">❌ Delete failed!</p>
      )}
    </div>
  );
};

export default FileDelete;

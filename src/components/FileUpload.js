import React from "react";
import { handleUpload } from "../services/handleUpload";

const FileUpload = ({ userName, files, status, setStatus, setFiles }) => {
  //   handleUpload(userName, files, setStatus, setFiles);

  return (
    <div className="form-group">
      <div className="mb-2">
        Upload Files
        <button
          onClick={() => handleUpload(userName, files, setStatus, setFiles)}
          className="btn btn-primary mr-3"
          disabled={!files || status === "uploading"}
          style={{ margin: "0 10px", fontSize: "1rem" }}
        >
          {status === "uploading" ? "Uploading..." : "Upload Files"}
        </button>
      </div>
      {status === "success" && (
        <p className="text-success mt-2">✅ Uploaded successfully!</p>
      )}
      {status === "fail" && (
        <p className="text-danger mt-2">❌ Upload failed!</p>
      )}
    </div>
  );
};

export default FileUpload;

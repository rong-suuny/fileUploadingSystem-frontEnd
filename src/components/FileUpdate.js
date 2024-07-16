import React from "react";
import { updateFiles } from "../services/updateFiles";

const FileUpdate = ({
  userName,
  files,
  updateStatus,
  setUpdateStatus,
  setFiles,
}) => {
  return (
    <div className="form-group">
      <div className="mb-2">
        Update Files
        <button
          onClick={() =>
            updateFiles(userName, files, setUpdateStatus, setFiles)
          }
          className="btn btn-info"
          disabled={!files}
          style={{ margin: "0 10px", fontSize: "1rem" }}
        >
          {updateStatus === "updating" ? "Updating..." : "Update Files"}
        </button>
      </div>
      {updateStatus === "success" && (
        <p className="text-success mt-2">✅ Updated successfully!</p>
      )}
      {updateStatus === "fail" && (
        <p className="text-danger mt-2">❌ Update failed!</p>
      )}
    </div>
  );
};

export default FileUpdate;

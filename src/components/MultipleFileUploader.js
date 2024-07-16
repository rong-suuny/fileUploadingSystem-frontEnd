import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FileUpdate from "./FileUpdate";
import FileList from "./FileList";
import FileDelete from "./FileDelete";

const MultipleFileUploader = () => {
  const [userName, setUserName] = useState("");
  const [files, setFiles] = useState(null);
  const [status, setStatus] = useState("initial");
  const [updateStatus, setUpdateStatus] = useState("initial");
  const [getFileListStatus, setGetFileListStatus] = useState("initial");
  const [deleteStatus, setDeleteStatus] = useState("initial");
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setStatus("initial");
      setFiles(e.target.files);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h1>Multiple File Uploader</h1>
            </div>
            <div className="card-body">
              <div className="form-group d-flex align-items-center">
                <label htmlFor="username" className="col-sm-2 mb-0">
                  <div className="mb-2">User Name:</div>
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="form-control"
                    placeholder="Enter your name"
                    style={{ flex: 1, maxWidth: "300px" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label
                  htmlFor="file"
                  className="sr-only"
                  style={{ marginRight: "10px" }}
                >
                  <div className="mb-2">Choose files</div>
                </label>
                <input
                  id="file"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="form-control-file"
                  style={{ fontSize: "1rem" }}
                />
              </div>
              <div className="form-group">
                {files && (
                  <div>
                    {Array.from(files).map((file, index) => (
                      <div key={index} className="mb-3">
                        <h5>File {index + 1} Details:</h5>
                        <p>Name: {file.name}</p>
                        <p>Type: {file.type}</p>
                        <p>Size: {file.size} bytes</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <FileUpload
                userName={userName}
                files={files}
                status={status}
                setStatus={setStatus}
                setFiles={setFiles}
              />
              <FileUpdate
                userName={userName}
                files={files}
                updateStatus={updateStatus}
                setUpdateStatus={setUpdateStatus}
                setFiles={setFiles}
              />
              <FileList
                userName={userName}
                files={files}
                fileList={fileList}
                getFileListStatus={getFileListStatus}
                setGetFileListStatus={setGetFileListStatus}
                setFiles={setFiles}
              />
              <FileDelete
                userName={userName}
                deleteStatus={deleteStatus}
                setDeleteStatus={setDeleteStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleFileUploader;

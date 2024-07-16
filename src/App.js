// import React from "react";
// import "./App.css";
// import FileUpload from "./components/FileUpload";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <FileUpload />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import FileUpload from "./components/FileUpload";
import MultipleFileUploader from "./components/MultipleFileUploader";

import "./App.css";
// export default App;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FileUpload /> */}
        <MultipleFileUploader />
      </header>
    </div>
  );
}

export default App;

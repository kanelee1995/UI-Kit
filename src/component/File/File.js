import React from "react";
import "./file.css";
import { AiFillFile } from "react-icons/ai";

const File = ({ children }) => {
  // const { errMsg, completed } = props;

  return (
    <div>
      {/* Default */}
      <div className="fileContainer">
        <div className="fileText">
          <span>
            <a href=".">Select a file</a> of drag in form
          </span>
          <span className="fileTextDefault">npm</span>
        </div>
        <div className="filePercent">{children}</div>
      </div>
      {/* Drag File */}
      <div className="fileContainer dragFile">
        <span>
          <AiFillFile size={24} />
        </span>
      </div>
      {/* Downloading */}
      <div className="fileContainer">
        <div className="fileText">
          <span>Downloading</span>
          <span className="fileTextDefault">
            PNG, jpg, gif files up to 10 MB in size are available for download
          </span>
        </div>
        <div className="progressBar"></div>
        <div className="filePercent">66%</div>
      </div>
      {/* Error */}
      <div className="fileContainer">
        <div className="fileText">
          <span>
            <a href=".">Select a file</a> of drag in form
          </span>
          <span className="fileTextDefault error">
            The file weight more than 10 MB{" "}
          </span>
        </div>
        {/* <div className="filePercent"></div> */}
      </div>
      {/* Net Error */}
      <div className="fileContainer">
        <div className="fileText">
          <span>
            <a href=".">Select a file</a> of drag in form
          </span>
          <span className="fileTextDefault error">
            An error has occurred, upload the file again
          </span>
        </div>
        <div className="progressBar"></div>
        <div className="filePercent">66%</div>
      </div>
      {/* Uploaded */}
      <div className="fileContainer">
        <div className="fileText">
          <span>
            video_s_moim_luibimom_kotikom.mp4
            <span className="fileSize"> 2 MB</span>
          </span>
          <a href="." className="fileTextDefault uploaded">
            Delete file
          </a>
        </div>

        <span className="fileUploaded">
          <AiFillFile size={24} />
        </span>
        <div className="filePercent">{children}</div>
      </div>
    </div>
  );
};

export default File;

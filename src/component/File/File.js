import React, { useMemo } from "react";
import "./file.css";
import { AiFillFile } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import CountUp from "react-countup";

const File = ({ children, props }) => {
  const acceptStyle = {
    backgroundColor: "#6e41e2",
    color: "#ffffff",
  };

  const baseStyle = {
    transition: "backgroundColor .5s ease-in-out",
  };

  function StyledDropzone(props) {
    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone();

    const style = useMemo(
      () => ({
        ...baseStyle,
        ...(isFocused ? {} : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? {} : {}),
      }),
      [isFocused, isDragAccept, isDragReject]
    );

    return (
      <div className="fileContainer" {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragAccept ? (
          <div>
            <span className="fileIcon">
              <AiFillFile size={24} />
            </span>
          </div>
        ) : (
          <div className="fileText">
            <span>Click to select a file of drag in here</span>
            <span className="fileTextDefault">
              PNG, jpg, gif files up to 10 MB in size are available for download
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="liveDemo">
        <StyledDropzone />
      </div>
      <div className="fileContainer DownloadSuccess">
        <div className="fileText">
          <span>Downloading</span>
          <span className="fileTextDefault">
            PNG, jpg, gif files up to 10 MB in size are available for download
          </span>
        </div>
        <div className="progressBar"></div>
        <div className="filePercent">
          <CountUp end={100} duration={3} />
          <span>%</span>
        </div>{" "}
      </div>

      <div className="fileContainer Error">
        <div className="fileText">
          <span>Click to select a file of drag in form</span>

          <span className="fileTextDefault error">
            The file weight more than 10 MB{" "}
          </span>
        </div>
      </div>

      <div className="fileContainer NetError">
        <div className="fileText">
          <span>Click to select a file of drag in form</span>
          <span className="fileTextDefault error">
            An error has occurred, upload the file again
          </span>
        </div>
        <div className="progressBar err"></div>
        <div className="filePercent">
          <CountUp end={66} duration={3} />
          <span>%</span>
        </div>
      </div>

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

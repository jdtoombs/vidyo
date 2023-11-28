import React from "react";
import * as styled from "./styled";
import { Button } from "../inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Row } from "..";

export interface IUploaderProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  setSource: React.Dispatch<React.SetStateAction<string | null>>;
  file: File | null;
}
/**
 * component to upload a file.
 * @param setFile will set the parent state to the file that is uploaded
 * @returns file input as well as a clear button to clear the file input
 */
export const Uploader: React.FC<IUploaderProps> = ({
  setFile,
  setSource,
  file,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);
  /** change event for when file is uploaded */
  const handleUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files.item(0));
    }
  };

  /** clear currently uplaoded file */
  const handleClear = () => {
    setFile(null);
    setSource(null);
    ref.current && ref.current.value && (ref.current.value = "");
  };

  return (
    <styled.Uploader className="uploader">
      <label htmlFor="file-upload">
        <Row className="upload-row">
          <FontAwesomeIcon className="upload-button" icon={faCloudArrowUp} />
        </Row>
      </label>
      <div className="file-name">{file ? file.name : "no file selected"}</div>
      <input
        id="file-upload"
        type="file"
        hidden
        ref={ref}
        onChange={handleUploadChange}
      />
      <Button variant="danger" className="clear-button" onClick={handleClear}>
        x
      </Button>
    </styled.Uploader>
  );
};

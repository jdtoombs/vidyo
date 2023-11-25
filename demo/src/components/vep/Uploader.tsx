import React from "react";
import { Row } from ".";

export interface IUploaderProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
/**
 * component to upload a file.
 * @param setFile will set the parent state to the file that is uploaded
 * @returns file input as well as a clear button to clear the file input
 */
export const Uploader: React.FC<IUploaderProps> = ({ setFile }) => {
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
    console.log(ref.current);
    ref.current && ref.current.value && (ref.current.value = "");
  };

  return (
    <Row>
      <input type="file" ref={ref} onChange={handleUploadChange} />
      <button onClick={handleClear}>x</button>
    </Row>
  );
};

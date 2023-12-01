import React, { DragEventHandler } from "react";
import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import { Col } from "..";

export interface IDropZoneProps extends React.HTMLAttributes<HTMLDivElement> {
  playerSize: number;
  icon?: React.ReactNode;
  message?: string;
}

/**
 * Component to give the user a drop zone to upload a file, as well as some instructions to get started
 * @param playerSize the size of the player
 * @returns Drop zone for user to upload file
 */
export const DropZone: React.FC<IDropZoneProps> = ({
  playerSize,
  message,
  icon,
  ...rest
}) => {
  const calcHeight = React.useMemo(() => {
    return playerSize / 2;
  }, [playerSize]);

  const dropRef = React.useRef<HTMLDivElement>(null);
  // TODO drag and drop
  const handleDragOver = () => {};
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    // TODO: validate file types

    const files = e.dataTransfer.files;

    // Temporarily only allow one file - add dialog box later
    if (files.length > 1) {
      alert("Only one file is allowed");
      return;
    }

    // handle upload
  };

  React.useEffect(() => {
    if (dropRef.current) {
      dropRef.current.addEventListener("dragover", handleDragOver);
      dropRef.current.addEventListener("drop", handleDrop);
    }

    return () => {
      if (dropRef.current) {
        dropRef.current.removeEventListener("dragover", handleDragOver);
        dropRef.current.removeEventListener("drop", handleDrop);
      }
    };
  }, []);

  return (
    <styled.DropZone
      ref={dropRef}
      $width={playerSize}
      $height={calcHeight}
      {...rest}
    >
      <Col className="drop-box">
        {!!icon ? icon : <FontAwesomeIcon icon={faHandPointDown} />}
        <div>{!!message ? message : "drop or upload a file to begin"}</div>
      </Col>
    </styled.DropZone>
  );
};

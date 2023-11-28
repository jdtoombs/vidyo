import React from "react";
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
  // TODO
  const handleDragOver = () => {};
  const handleDrop = () => {};

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
        <div>{!!message ? message : "Drop or upload file to begin"}</div>
      </Col>
    </styled.DropZone>
  );
};

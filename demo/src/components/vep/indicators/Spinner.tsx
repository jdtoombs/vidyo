import React from "react";
import * as styled from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Spinner: React.FC = () => <styled.Spinner>
    <FontAwesomeIcon icon={faSpinner} spin={true} />
</styled.Spinner>;

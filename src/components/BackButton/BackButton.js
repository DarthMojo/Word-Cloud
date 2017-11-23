import React from "react";
import type { Element } from "react";

import "./BackButton.css";

type BackButtonType = {
    onButtonClick: Function
}
const BackButton = ({ onButtonClick }: BackButtonType): Element<any> => {
    return (<div>
        <a className={"BackButton"}
            onClick={onButtonClick} />
    </div>);
};

export default BackButton;

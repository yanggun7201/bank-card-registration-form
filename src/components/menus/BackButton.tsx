import React, { memo } from 'react';
import { css } from "@emotion/react";
import { ReactComponent as BackSVG } from "../../images/arrow-menu-icon.svg";
import MenuIcon from "./MenuIcon";

type Props = {
    onClick?: () => void,
}

const BackButton: React.FC<Props> = ({ onClick }) => (
    <MenuIcon onClick={onClick}>
        <BackSVG css={iconStyle} />
    </MenuIcon>
);

export default memo(BackButton);

const iconStyle = css`
    width: 20px;
    height: 20px;
`;

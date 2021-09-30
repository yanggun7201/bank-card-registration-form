import React, { memo } from 'react';
import { css } from "@emotion/react";
import { ReactComponent as BackSVG } from "../../images/arrow-menu-icon.svg";
import MenuIcon from "./MenuIcon";

type Props = {
    onClick?: () => void,
}

const BackMenu: React.FC<Props> = ({ onClick }) => (
    <MenuIcon onClick={onClick}>
        <BackSVG css={iconStyle} />
    </MenuIcon>
);

export default memo(BackMenu);

const iconStyle = css`
    width: 20px;
    height: 20px;
`;

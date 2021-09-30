import React, { memo } from 'react';
import { css } from "@emotion/react";
import { ReactComponent as MenuSVG } from "../../images/burger-menu-icon.svg";
import MenuIcon from "./MenuIcon";

type Props = {
    onClick?: () => void,
}

const BurgerButton: React.FC<Props> = ({ onClick }) => (
    <MenuIcon onClick={onClick}>
        <MenuSVG css={iconStyle} />
    </MenuIcon>
);

export default memo(BurgerButton);

const iconStyle = css`
    width: 20px;
    height: 20px;
`;

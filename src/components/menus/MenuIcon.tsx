import React, { memo } from 'react';
import { css } from "@emotion/react";
import { Theme } from "../../theme";

type Props = {
    children: React.ReactNode,
    onClick?: () => void,
}

const MenuIcon: React.FC<Props> = ({
    children,
    onClick,
}) => (
    <div css={iconContainerStyle} onClick={onClick}>
        {children}
    </div>
);

export default memo(MenuIcon);

const iconContainerStyle = (theme: Theme) => css`
    width: ${theme.sizes.headerHeight}px;
    height: ${theme.sizes.headerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    cursor: pointer;

    transition: transform 300ms ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    }
`;
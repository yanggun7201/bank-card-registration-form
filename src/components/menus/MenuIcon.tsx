import React, { memo } from 'react';
import { css } from "@emotion/react";

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

const iconContainerStyle = css`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    cursor: pointer;
`;
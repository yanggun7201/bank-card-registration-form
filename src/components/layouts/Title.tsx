import React, { memo } from 'react';
import { css } from "@emotion/react";
import { Theme } from "../../theme";

type Props = {
    children: React.ReactNode,
}

const Title: React.FC<Props> = ({ children }) => (
    <h1 css={titleStyle}>{children}</h1>
);

export default memo(Title);

const titleStyle = (theme: Theme) => css`
    height: ${theme.sizes.headerHeight}px;
    padding: 0 ${theme.sizes.headerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    line-height: 24px;
    margin: 0;
`;
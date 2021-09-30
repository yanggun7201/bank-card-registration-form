import React, { memo } from 'react';
import { css } from "@emotion/react";
import { Theme } from "../../theme";

type Props = {
    children: React.ReactNode,
}

const Content: React.FC<Props> = ({ children }) => (
    <div css={contentStyle}>{children}</div>
);

export default memo(Content);

const contentStyle = (theme: Theme) => css`
    padding: 20px;
    height: 100%;
    min-height: 400px;

    ${theme.breakpoints.down("xxs")} {
        width: 100%;
        min-height: calc(100vh - ${theme.sizes.headerHeight}px);
        height: max-content;
        border: 0;
    }
`;
import React, { memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    children: React.ReactNode,
}

const ContentTitle: React.FC<Props> = ({ children }) => (
    <h1 css={contentTitleStyle}>{children}</h1>
);

export default memo(ContentTitle);

const contentTitleStyle = css`
    font-size: 18px;
    font-weight: 500;
`;
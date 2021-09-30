import React from 'react';
import { css } from "@emotion/react";

const Loading: React.FC = () => (
    <div css={loadingStyle}>Loading...</div>
);

export default Loading;

const loadingStyle = css`
    height: 100%;
    min-height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
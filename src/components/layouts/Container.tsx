import React, { memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    children: React.ReactNode,
}

const Container: React.FC<Props> = ({ children }) => (
    <div css={containerStyle}>{children}</div>
);

export default memo(Container);

const containerStyle = css`
    max-width: 800px;
    margin: 0 auto;
`;
import React, { memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    error?: string,
}

const FormErrorMessage: React.FC<Props> = ({ error }) => (
    <div css={errorStyle}>
        {error}
    </div>
);

export default memo(FormErrorMessage);

const errorStyle = css`
    height: 11px;
    font-size: 11px;
    color: red;
`;
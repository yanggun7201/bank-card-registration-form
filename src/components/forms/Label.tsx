import React, { memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    htmlFor: string,
    children: React.ReactNode,
    className?: string,
}

const Label: React.FC<Props> = ({
    htmlFor,
    children,
    className,
}) => (
    <label htmlFor={htmlFor} css={labelStyle} className={className}>
        {children}
    </label>
);

export default memo(Label);

const labelStyle = css`
    font-size: 16px;
    font-weight: 500;
    color: #212121;
    height: 24px;
    display: flex;
    align-items: flex-end;
`;
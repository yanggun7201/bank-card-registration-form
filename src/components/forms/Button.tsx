import React, { memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    type?: "submit" | "button" | "reset" | undefined,
    disabled?: boolean,
    children: React.ReactNode,
    className?: string,
}

const Button: React.FC<Props> = ({
    type = "submit",
    disabled = false,
    children,
    className,
}) => (
    <button
        type={type}
        disabled={disabled}
        className={className}
        css={buttonStyle}
    >
        {children}
    </button>
);

export default memo(Button);

const buttonStyle = css`
    font-size: 16px;
    font-weight: 500;
    color: #212121;
    height: 40px;
`;
import React, { memo } from 'react';
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode,
    to: string,
}

const MenuListItem: React.FC<Props> = ({
    children,
    to
}) => (
    <li css={linkContainerStyle}>
        <Link to={to} css={linkStyle}>{children}</Link>
    </li>
);

export default memo(MenuListItem);

const linkStyle = css`
    padding-left: 20px;
`;

const linkContainerStyle = css`
    cursor: pointer;
    height: 40px;
    width: 100%;
    list-style: none;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    transition: background-color 500ms ease-in-out;

    :before {
        content: '';
        height: 100%;
        width: 0;
        display: block;
        position: absolute;
        background-color: grey;
        transition: width 500ms ease-in-out;
    }

    :hover {
        background-color: #f1f1f1;

        :before {
            width: 5px;
        }
    }
`;
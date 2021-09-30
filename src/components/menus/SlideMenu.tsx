import React, { memo, useCallback } from 'react';
import BackButton from "./BackButton";
import { Theme } from "../../theme";
import { css } from "@emotion/react";
import MenuListItem from "./MenuListItem";

type Props = {
    isOpen: boolean,
    onClose?: () => void,
}

const SlideMenu: React.FC<Props> = ({
    isOpen = false,
    onClose
}) => {
    const onMenuListItemClicked = useCallback((e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (onClose) {
            onClose();
        }
    }, [onClose]);

    return (
        <div css={menuContainerStyle(isOpen)}>
            <div css={menuInnerContainerStyle}>
                <BackButton onClick={onClose} />
                <ul css={menuListStyle} onClick={onMenuListItemClicked}>
                    <MenuListItem to={"/register"}>Register Card</MenuListItem>
                    <MenuListItem to={"/menu1"}>Menu 1</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 2</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 3</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 4</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 5</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 6</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 7</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 8</MenuListItem>
                    <MenuListItem to={"/menu2"}>Menu 9</MenuListItem>
                </ul>
            </div>
        </div>
    )
}

export default memo(SlideMenu);

const menuContainerStyle = (isOpen: boolean) => (theme: Theme) => css`
    width: 300px;
    height: 100%;
    min-height: 400px;
    display: table;
    position: absolute;
    background-color: white;
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;
    border: 1px solid silver;

    ${isOpen && css`
        transform: translateX(0);
    `};

    ${theme.breakpoints.down("xxs")} {
        width: 100%;
        min-height: 100vh;
        height: max-content;
        border: 0;
    }
`;

const menuInnerContainerStyle = css`
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 40px;
`;

const menuListStyle = css`
    padding: 0;
`;




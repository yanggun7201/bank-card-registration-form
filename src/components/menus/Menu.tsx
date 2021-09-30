import React, { memo, useCallback, useState } from 'react';
import { css } from "@emotion/react";
import BurgerMenu from "./BurgerMenu";
import BackMenu from "./BackMenu";
import { Theme } from "../../theme";

const Menu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onMenuOpen = useCallback(() => {
        setMenuIsOpen(true);
    }, []);

    const onMenuClose = useCallback(() => {
        setMenuIsOpen(false);
    }, []);

    return (
        <>
            <BurgerMenu onClick={onMenuOpen} />
            <div css={menuContainerStyle(menuIsOpen)}>
                <div css={menuInnerContainerStyle}>
                    <BackMenu onClick={onMenuClose} />
                    <ul>
                        <li>Register Card</li>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default memo(Menu);

const menuContainerStyle = (menuIsOpen: boolean) => (theme: Theme) => css`
    width: 300px;
    height: 100%;
    min-height: 400px;
    position: absolute;
    background-color: yellow;
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;

    ${menuIsOpen && css`
        transform: translateX(0);
    `};

    ${theme.breakpoints.down("xxs")} {
        width: 100%;
    }
`;


const menuInnerContainerStyle = css`
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 40px;
`;
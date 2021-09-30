import React, { memo, useCallback, useState } from 'react';
import BurgerButton from "./BurgerButton";
import SlideMenu from "./SlideMenu";

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
            <BurgerButton onClick={onMenuOpen} />
            <SlideMenu isOpen={menuIsOpen} onClose={onMenuClose} />
        </>
    );
}

export default memo(Menu);
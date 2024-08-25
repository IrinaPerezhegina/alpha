/* eslint-disable max-len */
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps{
    className?:string;
    setFavorite?:(status:boolean)=>void
    favorite?:boolean

}

export const Navbar = memo(({ className, setFavorite, favorite }:NavbarProps) => (
    <header className={classNames(cls.Navbar, {}, [className])}>
        {favorite ? (
            <Button
                onClick={() => setFavorite(false)}
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
            >
                Избранное
            </Button>
        ) : (
            <Button
                onClick={() => setFavorite(true)}
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
            >
                Все карточки
            </Button>
        )}

    </header>
));
export default Navbar;

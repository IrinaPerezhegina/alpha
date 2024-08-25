import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classnames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
className?: string;
src?:string;
size?:number;
alt?:string
}

export const Avatar = ({
    className, src, size, alt,
}:AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);
    const mods:Mods = {};
    return (
        <img
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
};

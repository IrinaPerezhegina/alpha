import { memo } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGAttributes<SVGAElement> {
   className?: string;
   Svg:React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
   inverted?:boolean;
}

export const Icon = memo((props:IconProps) => {
    const {
        className,
        Svg,
        inverted,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])}
            {...otherProps}
        />
    );
});

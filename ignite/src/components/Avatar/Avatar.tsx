import { ImgHTMLAttributes } from "react"
import  AvatarStylesModules from '../../styles/Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean;
}


export function Avatar({ hasBorder= true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? AvatarStylesModules.avatarWithBorder : AvatarStylesModules.avatar}
    {...props}
    />
  );
}

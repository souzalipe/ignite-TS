import  AvatarStylesModules from '../../styles/Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string
}


export function Avatar({ hasBorder= true, src, alt }: AvatarProps) {
  return (
    <img
      className={hasBorder ? AvatarStylesModules.avatarWithBorder : AvatarStylesModules.avatar}
      src={src}
      alt={alt}
    />
  );
}

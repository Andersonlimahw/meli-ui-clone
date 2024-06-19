//REf: https://phosphoricons.com/
import { 
    GithubLogo, 
    InstagramLogo,
    LinkedinLogo, 
    TwitterLogo, 
    YoutubeLogo, 
    AndroidLogo,
    AppleLogo,
    GoogleLogo,
    DeviceMobile,
    Atom,
    FileSql,
    Globe,
    Fire,
    FileTs,
    FileJs, 
    SketchLogo, 
    Leaf,
    FileTsx,
    FileJsx,
    WindowsLogo,     
    FileCode,
    Hash,
    FileVideo, 
    Code,
    Kanban,
    Timer,
    Bell,

} from '@phosphor-icons/react';
import { FC } from 'react';
interface RenderIconProps {
    size?: number,
    color?: string,
    name: string,
}

export interface IconProps extends RenderIconProps {

}

export const renderIcon = ({ name, size = 32, color = '#121212', ...otherProps } : RenderIconProps) => {
    const iconsList : any = {
        'GithubLogo': { render: () => <GithubLogo size={size} color={color} {...otherProps} /> },
        'InstagramLogo': { render: () => <InstagramLogo size={size} color={color} {...otherProps} /> },
        'LinkedinLogo': { render: () => <LinkedinLogo size={size} color={color} {...otherProps} /> },
        'TwitterLogo': { render: () => <TwitterLogo size={size} color={color} {...otherProps} /> },
        'YoutubeLogo': { render: () => <YoutubeLogo size={size} color={color} {...otherProps} /> },
        'AndroidLogo': { render: () => <AndroidLogo size={size} color={color} {...otherProps} /> },
        'GoogleLogo': { render: () => <GoogleLogo size={size} color={color} {...otherProps} /> },
        'AppleLogo': { render: () => <AppleLogo size={size} color={color} {...otherProps} /> },        
        'DeviceMobile': { render: () => <DeviceMobile size={size} color={color} {...otherProps} /> },
        'Atom': { render: () => <Atom size={size} color={color} {...otherProps} /> },
        'Globe': { render: () => <Globe size={size} color={color} {...otherProps} /> },
        'Fire': { render: () => <Fire size={size} color={color} {...otherProps} /> },
        'FileTs': { render: () => <FileTs size={size} color={color} {...otherProps} /> },
        'FileTsx': { render: () => <FileTsx size={size} color={color} {...otherProps} /> },
        'FileSql': { render: () => <FileSql size={size} color={color} {...otherProps} /> },
        'FileJs': { render: () => <FileJs size={size} color={color} {...otherProps} /> },
        'FileJsx': { render: () => <FileJsx size={size} color={color} {...otherProps} /> },
        'Leaf': { render: () => <Leaf size={size} color={color} {...otherProps} /> },
        'SketchLogo': { render: () => <SketchLogo size={size} color={color} {...otherProps} /> },
        'WindowsLogo': { render: () => <WindowsLogo size={size} color={color} {...otherProps} /> },
        'FileVideo': { render: () => <FileVideo size={size} color={color} {...otherProps} /> },
        'FileCode': { render: () => <FileCode size={size} color={color} {...otherProps} /> },        
        'Code': { render: () => <Code size={size} color={color} {...otherProps} /> },        
        'Kanban': { render: () => <Kanban size={size} color={color} {...otherProps} /> },        
        'Timer': { render: () => <Timer size={size} color={color} {...otherProps} /> },  
        'Hash': { render: () => <Hash size={size} color={color} {...otherProps} /> },
        'Bell': { render: () => <Bell size={size} color={color} {...otherProps} /> },
    };
    return iconsList[`${name}`]?.render() ?? <GithubLogo size={size} color={color} />;
}


export const Icon : FC<IconProps> = ({ name, size, color }) => {
    return(
        <>
             {renderIcon({ name: name, size: size, color: color })}
        </>
    )
}
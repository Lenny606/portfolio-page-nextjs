import Link from "next/link";
import {Contact, Github, Home, Linkedin, LucideNotepadText, Palette, Twitter, User} from "lucide-react";

const NavButton = ({btn, x, y}) => {

    function getIcon(btnIcon) {
        switch (btnIcon) {
            case "home":
                return <Home
                className={'w-full h-auto'}
                strokeWidth={1.5}/>;
            case "about":
                return <User
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "projects":
                return <Palette
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "contact":
                return <Contact
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "github":
                return <Github
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "linkedin":
                return <Linkedin
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "twitter":
                return <Twitter
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            case "resume":
                return <LucideNotepadText
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>;
            default:
                return <Home
                    className={'w-full h-auto'}
                    strokeWidth={1.5}/>
        }
    }

    return (
        <div className={'absolute cursor-pointer z-50'}
             style={{
                 transform: `translate(${x}, ${y})`
             }}>
            <Link href={btn.link}
                  target={btn.newTab ? '_blank' : '_self'}
                  className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm'}
                  aria-label={btn.label}
                  name={btn.label}>
                <span className={'w-14 h-14 p-4 relative animate-spin-slow-reverse'}>
                    {getIcon(btn.icon)}
                </span>
                {/*{btn.label}*/}

            </Link>
        </div>
    )
}

export default NavButton;
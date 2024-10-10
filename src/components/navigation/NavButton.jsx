import Link from "next/link";
import {Contact, Github, Home, Linkedin, LucideNotepadText, Palette, Twitter, User} from "lucide-react";
import ResponsiveComponent from "@/components/ResponsiveComponent";
import clsx from "clsx";

const NavButton = ({btn, x, y, labelDirection = "right"}) => {

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
        <ResponsiveComponent>
            {
                ({screenSize}) => {console.log(screenSize)
                    return screenSize && screenSize >= 480 ? (

                            <div className={'absolute cursor-pointer z-50'}
                                 style={{
                                     transform: `translate(${x}, ${y})`
                                 }}>
                                <Link href={btn.link}
                                      target={btn.newTab ? '_blank' : '_self'}
                                      className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm'}
                                      aria-label={btn.label}
                                      name={btn.label}>
                <span
                    className={'w-14 h-14 p-4 relative animate-spin-slow-reverse hover:text-accent group-hover:pause'}>
                    {getIcon(btn.icon)}
                    <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}>

                    </span>
                    <span
                        className={'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'}>
                    {btn.label}
                </span>
                </span>

                                </Link>
                            </div>
                        ) :
                        (
                            <div className={'w-fit cursor-pointer z-50'} >
                                <Link href={btn.link}
                                      target={btn.newTab ? '_blank' : '_self'}
                                      className={'text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-inset-sm'}
                                      aria-label={btn.label}
                                      name={btn.label}>
                                    <span
                                        className={'w-14 h-14 xs:w-10 xs:h-10 p-4 relative hover:text-accent'}>
                                        {getIcon(btn.icon)}
                                        <span className={'peer bg-transparent absolute top-0 left-0 w-full h-full'}>

                                        </span>
                                        <span
                                            className={clsx('absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap', labelDirection === 'left' ? "right-full left-auto" : "" )}>
                                        {btn.label}
                                    </span>
                                    </span>

                                </Link>
                            </div>
                        )
                }
            }
        </ResponsiveComponent>

    )
}

export default NavButton;
import Link from "next/link";
import {Home} from "lucide-react";

const NavButton = ({btn, x, y}) => {

    function getIcon(btnIcon) {
        switch (btnIcon) {
            case "home":
                return <Home
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
                  className={'text-foreground rounded-full flex items-center justify-center'}
                  aria-label={btn.label}
                  name={btn.label}>
                <span className={'w-14 h-14 p-4 relative'}>
                    {getIcon(btn.icon)}
                </span>
                {/*{btn.label}*/}

            </Link>
        </div>
    )
}

export default NavButton;
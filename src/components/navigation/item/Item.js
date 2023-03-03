import Link from "next/link";
import cl from '../navigation.module.scss';

export default function Item({children, href}) {
    return (
        <div className={cl.navigation__link}>
            <Link href={href}>{children}</Link>
        </div>
    )
}
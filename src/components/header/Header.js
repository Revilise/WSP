import cl from './header.module.scss'

export default function Header() {
    return (
        <header className={cl.header}>
            <h1 className={cl.header__logo}>WSP</h1>
        </header>
    )
}
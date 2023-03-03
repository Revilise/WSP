import cl from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={cl.footer}>
            <p>Developed by <a href={"https://github.com/Revilise"} target={"_blank"}>Revilise</a></p>
        </footer>
    )
}
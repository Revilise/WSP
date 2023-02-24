import cl from './form.module.scss';

export default function Form({children}) {
    return (
        <form onSubmit={e => e.preventDefault()} className={cl.form}>
            {children}
        </form>
    )
}
import cl from './button.module.scss';

export function Button({onClick, children, className = ""}) {
    const styles = `${cl.button} ${className}`.trim();
    return <button onClick={onClick} className={styles}>{children}</button>
}
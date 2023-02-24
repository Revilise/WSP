import cl from './input.module.scss';

export default function Input({value, onChange, className = ""}) {
    const styles = `${cl.input} ${className}`.trim();
    return <input value={value} onChange={onChange} className={styles}/>
}
import cl from './iframe.module.scss';

export default function IFrame({src}) {
    return (
        <iframe className={cl.iframe} src={src} />
    )
}
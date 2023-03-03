export default function Article({html}) {
    return (
        <div dangerouslySetInnerHTML={{__html: html}}></div>
    )
}
import Link from "next/link";

export default function Item({title, link}) {
    return (
        <Link href={link}>{title}</Link>
    )
}
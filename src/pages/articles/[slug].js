import axios from "axios";
import Article from "../../components/article/Article";
import Layout from "../../components/layout/Layout";

import {useRouter} from "next/router";

export async function getServerSideProps({params}) {
    try {
        const res = await axios.get(`${process.env.VERCEL_URL}/articles/${params?.slug}.html`);
        return { props: { page: res.data, title: params?.slug } }
    }
    catch (ex) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
                // statusCode: 301
            },
        }
    }
}

export default function DynamicArticlePage({page, title}) {
    const router = useRouter();
    return (
        <Layout title={title}>
            <a style={{padding: "24px 0 24px 0", textDecoration: "none", cursor: "pointer"}} onClick={() => router.back()}>{"<--"} на главную </a>
            <Article html={page} />
        </Layout>
    )
}

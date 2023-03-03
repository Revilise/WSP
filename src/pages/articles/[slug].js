import axios from "axios";
import Layout from "../../components/layout/Layout";

export async function getServerSideProps({params}) {
    try {
        const res = await axios.get(`http://localhost:3000/api/${params?.slug}`);
        console.log(res.data)
        return { props: { page: res.data } }
    }
    catch (ex){
        throw ex;
        // return {
        //     redirect: {
        //         destination: '/',
        //         permanent: false,
        //         // statusCode: 301
        //     },
        // }
    }
}

export default function DynamicArticlePage({page}) {
    return (
        <Layout>
            <div dangerouslySetInnerHTML={ {__html: page}}></div>
        </Layout>
    )
}

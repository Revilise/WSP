import Layout from "../components/layout/Layout";
import Navigation from "../components/navigation/Navigation";

export default function HomePage() {
    const links = [
        {
            link: "/"
        }
    ]

    return (
        <Layout title={"Главная страница"}>
            <Layout.Grid>
                <Layout.Grid.Column>
                    <Navigation />
                </Layout.Grid.Column>
            </Layout.Grid>
        </Layout>
    )
}
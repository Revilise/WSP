import Layout from "../components/layout/Layout";
import Navigation from "../components/navigation/Navigation";

export default function HomePage() {
    const links = [
        {
            link: "/articles/modeling_1",
            title: "Моделирование ч.1"
        }
    ]

    return (
        <Layout title={"Главная страница"}>
            <Layout.Grid>
                <Layout.Grid.Column>
                    <Navigation links={links} />
                </Layout.Grid.Column>
            </Layout.Grid>
        </Layout>
    )
}
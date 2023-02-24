import Layout from "../../components/layout/Layout";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/Input";
import Submit from "../../components/form/submit/Submit";

export default function LoginPage() {
    return (
        <Layout title={"Авторизация"}>
            <Layout.Grid>
                <Layout.Grid.Column />
                <Layout.Grid.Column maxWidth={320}>
                    <Form>
                        <Input />
                        <Input />
                        <Submit>Войти</Submit>
                    </Form>
                </Layout.Grid.Column>
                <Layout.Grid.Column />
            </Layout.Grid>
        </Layout>
    )
}
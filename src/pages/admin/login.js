import Layout from "../../components/layout/Layout";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/Input";
import Submit from "../../components/form/submit/Submit";

export default function LoginPage() {
    return (
        <Layout title={"Авторизация"}>
            <Layout.Grid>
                <Layout.Grid.Column fr={2} />
                <Layout.Grid.Column fr={2}>
                    <Form>
                        <Input />
                        <Input />
                        <Submit>Войти</Submit>
                    </Form>
                </Layout.Grid.Column>
                <Layout.Grid.Column fr={2}/>
            </Layout.Grid>
        </Layout>
    )
}
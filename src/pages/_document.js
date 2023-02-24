import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from "styled-components";

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {

        const sheet = new ServerStyleSheet();

        const styles = sheet.getStyleElement();

        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );
        page.styles = styles;
        return page;
    }

    render () {

        return (
            <html>
            <Head>
                {this.props.styles}
            </Head>
            <body>
                <Html />
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}

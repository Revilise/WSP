import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import cl from './layout.module.scss';

function Layout({title, children}) {
    return (
        <div className={cl.layout}>
            <Head>
                <title>{title + " - WSP"}</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
Layout.Grid = ({children}) => (
    <div className={cl["layout-grid"]}>{children}</div>
)

Layout.Grid.Column = ({children, fr = 1, maxWidth = null}) => {
    return <div className={cl["layout-grid__column"]} style={{flexGrow: fr, maxWidth}}>{children}</div>
}

export default Layout;

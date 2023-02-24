import React from 'react';

import Loading from "../components/loading/Loading";

import '../css/clear-styles.css';
import '../css/fonts.css';

export default function App({Component, pageProps}) {
    return (
        <React.Suspense fallback={<Loading />}>
            <Component {...pageProps} />
        </React.Suspense>
    )
}
import React from 'react';
import Loading from "../components/loading/Loading";

export default function App({Component, pageProps}) {
    return (
        <React.Suspense fallback={<Loading />}>
            <Component {...pageProps} />
        </React.Suspense>
    )
}

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import store from '../redux/store/store'
import { persistStore } from 'redux-persist';
import "../styles/main.css";
//import 'keen-slider/keen-slider.min.css';

let persistor = persistStore(store)

interface Props {
    children: ReactNode 
}

const Noop: FC <Props> = ({children}: Props) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
    const Layout: any = Component.Layout ?? Noop;
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />   
                    {/* {typeof window === 'undefined' ? null : <Component {...pageProps} />} */}
                </Layout>
            </PersistGate>
        </Provider>
    )
}




export default MyApp;

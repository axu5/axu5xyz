import Head from "next/head";
import Main from "../../components/Main";
import Peacelab from "components/Peacelab";
import NavBar from "components/NavBar";

export default function Home() {
    return (
        <>
            <Head>
                <title>axu5 | dev</title>
                <meta
                    name='description'
                    content='Aleksanteri Aho is a full stack web developer born in 2005'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />
            <Main />
            <Peacelab />
        </>
    );
}

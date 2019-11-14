import Link from "next/link";
import Head from "next/head";

export default class Layout extends React.Component{
    render(){

        const { children, title } = this.props

        return <div>
            <Head>
                <title>{ title }</title>
            </Head>
            <header><Link href="/"><a><h1>Podcasts</h1></a></Link></header>

            { children }

            <style jsx>{`
                header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                header a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>

            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: 'Lobster', cursive;
                    text-decoration: none;
                    background: white;
                }
            `}</style>
        </div>
    }
}
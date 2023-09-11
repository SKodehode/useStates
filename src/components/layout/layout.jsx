import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(properties) {
    const { children } = properties

    return(
        <>
        <Header></Header>
        <main>
            {properties.children}
        </main>
        <Footer></Footer>
        </>
    )
}
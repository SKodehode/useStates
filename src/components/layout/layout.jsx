/**
 * The layout.jsx document is the base layout for our project's page. 
 * 
 * We have imported the header and footer documents into this one and placed them acordingly to where they should be.
 * Placing the header at the top of our page with the footer at the bottom.
 * This has been done to reduce the total amount of code in our project because the header and footer will stay the same across every page.
 * 
 * Inside the main element is where the main content will be rendered using the properties.children syntax. 
 */
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

export default Layout
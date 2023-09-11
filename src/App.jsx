import "./styling/App.css"
import Layout from "./components/layout/layout"
import Posts from "./components/blog/posts"
import "./styling/main.css"


function App() {
  return (
    <>
      <Layout>
        <Posts />
      </Layout>
    </>
  )
}

console.log(Posts)

export default App

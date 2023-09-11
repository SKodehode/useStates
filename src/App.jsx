import "./styling/App.css"
import Layout from "./components/layout/layout"
import Posts from "./components/blog/posts"
import Comments from "./components/blog/comments"

import "./styling/main.css"


function App() {
  return (
    <>
      <Layout>
        <Posts />
        <Comments />
      </Layout>
    </>
  )
}

console.log(Posts)

export default App

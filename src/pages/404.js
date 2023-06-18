import React from "react"
import { Link } from "gatsby"
import Layout from "../component/Layout"

const Error = () => {
  return (
    <Layout fixFoot>
      <main className="flex flex-col gap-5 ">
        <h1 className="text-center">it's a dead end</h1>
        <Link to="/" className="btn w-36 text-center mx-auto">
          back home
        </Link>
      </main>
    </Layout>
  )
}

export default Error

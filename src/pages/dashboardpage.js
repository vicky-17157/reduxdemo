import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <section>
    <h1>Demos</h1>
    <p>This is a demo exercise.</p>
    <p>Let's View the demos in the below link</p>

    <Link to="/demos" className="button">
      View Demos
    </Link>
  </section>
)

export default DashboardPage
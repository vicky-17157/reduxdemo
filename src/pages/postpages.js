import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchDemos } from '../actions/postact'
import { Demo } from '../components/post'

const DemosPage = ({ dispatch, loading, demos, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchDemos())
  }, [dispatch])

  // Show loading, error, or success state
  const renderDemos = () => {
    if (loading) return <p>Loading demos...</p>
    if (hasErrors) return <p>Unable to display demos.</p>
    return demos.map((demo) => <Demo key={demo.id} demo={demo} />)
  }

  return (
    <section>
      <h1>Demos</h1>
      {renderDemos()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.demos.loading,
  demos: state.demos.demos,
  hasErrors: state.demos.hasErrors,
})

export default connect(mapStateToProps)(DemosPage)
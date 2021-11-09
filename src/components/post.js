import React from 'react'

export const Demo = ({ demo }) => (
  <article className="post-excerpt">
    <h2>{demo.title}</h2>
    <p>{demo.body}</p>
    <p>{demo.url}</p>
    <p>{demo.thumbnailUrl}</p>
  </article>
)
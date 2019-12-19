import React from 'react'
import { Link } from 'gatsby'

const PostListing = ({
  post: {
    fields: { slug },
    excerpt,
    frontmatter: { title, date },
  },
}) => (
  <article>
    <h3>
      <Link to={slug}>{title}</Link>
    </h3>
    <span>{date}</span>
    <p>{excerpt}</p>
  </article>
)

export default PostListing

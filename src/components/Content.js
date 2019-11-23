import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/twitter-icon.png'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>
    {content}
  </div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import twitter from '../img/twitter-icon.png'
import youtube from '../img/youtube-icon.png'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img
                src="https://gravatar.com/userimage/33319223/785e4839979cd343ef431e138e2c8ba2?size=200"
                style={{
                  borderRadius: '50%',
                  maxHeight: '6rem',
                  margin: '.25rem 2rem 0 0',
                }}
              />
              <h2 class="title is-2">DANIELRVT</h2>
            </Link>
          </div>
          <div className="navbar-start">
            {/* {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))} */}
          </div>
          <div className="navbar-end">
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <a
                className="navbar-item is-block"
                href="https://github.com/danielrvt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>

              <a
                className="navbar-item is-block"
                href="https://twitter.com/danielrvt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={twitter} alt="Twitter" />
                </span>
              </a>

              <a
                className="navbar-item is-block"
                href="https://www.youtube.com/channel/UC_1FcCZgSWNRiqossWAqIog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={youtube} alt="Youtube" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar

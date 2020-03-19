import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import HeroArea from '../components/HeroArea'
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import ButtonsArea from '../components/ButtonsArea'
import PageSection from '../components/PageSection'
import WikiSidebar from '../components/WikiSidebar.js'

export const WikiPostTemplate = ({
  content,
  contentComponent,
  title,
  sections,
  helmet,
}) => {

  return (
    <section className="section">
      {helmet  || ''}
      <HeroArea title={title} />
      <main>
        <Container>
          <Row>
            <Col md={4}>
              <WikiSidebar content={content} />
            </Col>
            <Col md={8}>
              <HTMLContent content={content} />
            </Col>
          </Row>
        </Container>
      </main>
    </section>
  )
}


WikiPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const WikiPost = ({ data }) => {
  const { markdownRemark: post } = data
  
  return (
    <Layout>
      <WikiPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        sections={post.frontmatter.sections}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

WikiPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WikiPost

export const pageQuery = graphql`
  query WikiPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        wikiSlug
        sections {
          title
          body
        }
      }
    }
  }
`

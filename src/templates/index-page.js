import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Container, Row, Col} from 'react-bootstrap'
import citySealImage from '../img/city-seal.png';
import Layout from '../components/Layout'
import HeroArea from '../components/HeroArea'
import PageSection from '../components/PageSection'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  officials,
  sections,
}) => (
  <div className='landing-page-content'>
    <HeroArea title={heading} className='landing-page'>
      <Container>
        <Row>
          <Col md={12} className='is-center-aligned'>
            <img src={citySealImage} />
            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen typo-title typo-main-title">
              {title}
            </h1>
          </Col>
        </Row>
        <Row>
          {officials.map(item=> (
            <Col md={3} key={item.official} className='is-center-aligned'>
              <p className='typo-official'>{item.official}</p>
              <p className='type-official-title'>{item.agency}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </HeroArea>
    <main>
      <Container>
        <Row>
          <Col md={10}>
              {
                sections.map(section =>
                  <PageSection section={section} key={section.title} />
                )
              }
          </Col>
        </Row>
      </Container>
      
    </main>
    { console.log( officials, sections )}
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        officials={frontmatter.officials}
        sections={frontmatter.sections}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        officials {
          official
          agency
        }
        sections {
          title
          body
        }
      }
    }
  }
`

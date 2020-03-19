import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import _ from 'lodash'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import PageContent from '../../components/Content';
import HeroArea from '../../components/HeroArea'
import PropTypes from 'prop-types'

const ResultPageTemplate = (props) => (
  <>
    {console.log(props)}
    <HeroArea title="Assessing and Screening" />
    <main>
      <Container>
        <Row>
          <Col md={{span: 10 }}>
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
            <Link to='/question/' className='btn btn-primary' state={{code: ''}}>Start Over</Link>
          </Col>
        </Row>
      </Container>
    </main>
  </>
)


const ResultPage = (props) => {
  const { edges } = props.data.allMarkdownRemark
  const code = _.get(props.location, 'state.code', '')
  const correctResult =  _.map(edges, 'node').filter(item => {
    
    const regexp = new RegExp(`${item.frontmatter.resultCode}`, 'g');
    console.log("~~~~~ >> ", item.frontmatter.resultCode, code, code.match(regexp));
    return code.match(regexp);
  });


  return (
    <Layout>
      <ResultPageTemplate
        title={_.get(correctResult, '[0].frontmatter.title', '')}
        content={_.get(correctResult, '[0].html', '')}
      />
    </Layout>
  )
}

ResultPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResultPage;

export const pageQuery = graphql`
  query ResultPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { templateType: { eq: "result" } } }) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            resultSlug
            resultCode
          }
        }
      }
    }
  }
`

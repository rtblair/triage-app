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
import _ from 'lodash'

export const QuestionPostTemplate = ({
  content,
  contentComponent,
  title,
  answers,
  helmet,
  ...props
}) => {
  const PostContent = contentComponent || Content
  const [nextLink, setNextLink] = useState(answers && answers.length === 1 ? answers[0] : null);
  const [ currentCode, setCurrentCode ] = useState('')

  
  return (
    <section className="section">
      {helmet  || ''}
      <HeroArea title="Assessing and Screening" />
      <main>
        <Container>
          <Row>
            <Col md={12}><h1>{title}</h1></Col>
            <Col md={10}>
                {
                  content !== "<p>-</p>" &&
                  <PostContent content={content} />
                }
                
                
                {
                  answers && answers.length > 1 && 
                
                  <div className='answers-area'>
                    <ToggleButtonGroup type="radio" name='answer' className='answer-group' onChange={(item)=>{ setNextLink(item) }}>
                      {
                        answers.map(answer => (
                          <ToggleButton name='answer' value={answer}>{answer.answer}</ToggleButton>
                        
                        ))
                      }
                    </ToggleButtonGroup>
                  </div>
                }

                {/* {console.log("props.code + nextLink.resultCode >> ", (props.code + nextLink.resultCode))} */}
                
                  <ButtonsArea  
                    base='question' 
                    next={nextLink ? nextLink.nextQuestion : null} 
                    resultState={nextLink ? (props.code||'') + nextLink.resultCode : ''}
                    noBackButton={answers && answers.length == 1} 
                  />
            </Col>
          </Row>
        </Container>

      </main>
    </section>
  )
}


QuestionPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const QuestionPost = ({ data, ...props }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <QuestionPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        code={_.get(props.location, 'state.code', '')}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.title}`}
            />
          </Helmet>
        }
        answers={post.frontmatter.answers}
      />
    </Layout>
  )
}

QuestionPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default QuestionPost

export const pageQuery = graphql`
  query QuestionPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        questionSlug
        answers { 
          answer
          nextQuestion
          resultCode
        }
      }
    }
  }
`

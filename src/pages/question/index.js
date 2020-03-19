import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import HeroArea from '../../components/HeroArea'

export default class QuestionIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HeroArea title="Assessing and Screening" />
        <main>
          <Container>
            <Row>
              <Col md={{span: 10 }}>
                <h1>Could I Have Coronavirus?</h1>
                <h2>Free, Confidential Assessment</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h2>Here's What to Expect</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                  <Link 
                    to="/question/start/"
                    className='btn btn-primary'
                  >
                    Start Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </Layout>
    )
  }
}

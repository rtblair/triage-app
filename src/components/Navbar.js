import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <Container>
                <div className="navbar-brand">
                  <div
                    className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                    data-target="navMenu"
                    onClick={() => this.toggleHamburger()}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div
                  id="navMenu"
                  className={`navbar-menu ${this.state.navBarActiveClass}`}
                >
                  <div className="navbar-start has-text-centered">
                    <div className="navbar-item">
                      <span className="dropdown-toggle navbar-item" data-toggle="dropdown" role="button"  aria-expanded="false">
                        What we know
                        <ul className='dropdown-menu' role="menu">
                          <li><Link to="/what-we-know/what-is-covid-19">What is COVID-19?</Link></li>
                          <li><Link to="/what-we-know/case-count">Case Count</Link></li>
                          <li><Link to="/what-we-know/high-risk-population">High-risk Populations</Link></li>
                        </ul>
                      </span>
                    </div>
                    <div className="navbar-item">
                      <span className="dropdown-toggle navbar-item" data-toggle="dropdown" role="button"  aria-expanded="false">
                        What we're doing
                        <ul className='dropdown-menu' role="menu">
                          <li><Link to="/what-were-doing/latest-guidance-from-the-mayor">Latest Guidance from the Mayor</Link></li>
                          <li><Link to="/what-were-doing/school-closures/">School Closures</Link></li>
                          <li><Link to="/what-were-doing/restaurants-and-bars/">Restaurants and Bars</Link></li>
                          <li><Link to="/what-were-doing/sick-leave-benefits/">Sick Leave/Benefits</Link></li>
                        </ul>
                      </span>
                    </div>
                    <div className="navbar-item">
                      <span class="dropdown-toggle navbar-item" data-toggle="dropdown" role="button" aria-expanded="false">
                        What can I do?
                        <ul className='dropdown-menu' role="menu">
                          <li><Link to="/what-to-do/prevent-the-spread/">Prevent the Spread</Link></li>
                          <li><Link to="/question/start/">Screening &amp; evaluation</Link></li>
                          <li><Link to="/what-to-do/open-air-testing/">Open Air Testing</Link></li>
                          <li><Link to="/what-to-do/sign-up-updates/">Sign up for updates</Link></li>
                        </ul>
                      </span>
                      
                    </div>
                    <div className="navbar-item">
                      <span class="dropdown-toggle navbar-item" data-toggle="dropdown" role="button" aria-expanded="false">
                        Other Resources
                        <ul className='dropdown-menu' role="menu">
                          <li><Link to="/other/printed-material/">Printed Material</Link></li>
                          <li><Link to="/other/resources/">Other Resources</Link></li>
                        </ul>
                      </span>
                      
                    </div>
                  </div>
                </div>
          </Container> 
        </nav>
      </>
    )
  }
}

export default Navbar

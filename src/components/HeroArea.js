import React from 'react'


const HeroArea = class extends React.Component {
  render = () => (<div
      className={`full-width-image margin-top-0 hero-area ${this.props.className}`}
    >
      {
        this.props.children ?
          this.props.children :
          <div
            className='hero-title'
          >
            <h1
              className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen typo-title"
            >
              {this.props.title}
            </h1>
            {this.props.subheading && 
              <h2
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen typo-subtitle"
              >
                {this.props.subheading}
              </h2>
            }
          </div>
      }
    </div>)
};

export default HeroArea
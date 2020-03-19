import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'react-bootstrap'

const ButtonsArea = class extends React.Component {
  render() {
    return (
        <div className="buttons-area">
          {
            !this.props.noBackButton &&
            <Button variant='outline-secondary' className="btn-outline-secondary" onClick={()=>{ window.history.back() }}>Back</Button>
          }
          
          { 
            !!this.props.next &&
              ( 
                this.props.next !== "_submit" 
                ? <Link className='btn btn-primary' to={`/${this.props.base}/${this.props.next}/`}  state={{code: this.props.resultState}}>Continue</Link>
                : <Link className='btn btn-primary' to={`/result/`} state={{code: this.props.resultState}}>Submit</Link>
              )
          }
          
        </div>
    )
  }
}

export default ButtonsArea;
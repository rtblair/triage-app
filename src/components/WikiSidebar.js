import React from 'react'
import _ from 'lodash'

const WikiSidebar = class extends React.Component {

  componentWillUnmount() {
    window.removeEventListener('scroll', this.wikiHeaderListener)
  }
  componentDidMount () {   
    window.addEventListener('scroll', this.wikiHeaderListener, false);
  }

  wikiHeaderListener = () =>  { 
    var targetHeaders = document.querySelectorAll('.sticky-container');
    
    _.each(targetHeaders, item => {
      
      const target = [...item.childNodes].filter(ch => ch.classList !== undefined);
      // console.log(" >> ", target, item.getBoundingClientRect())

      if (target.length > 0 && target[0].classList !== undefined) {
        if(item.getBoundingClientRect().top - 50 < 0) {
          target[0].classList.add('stickied');
        } else {
          target[0].classList.remove('stickied');
        }


        const childHeight = target[0].getBoundingClientRect().height;
        if ( item.getBoundingClientRect().top - 70 + item.getBoundingClientRect().height - childHeight < 0) {
          target[0].classList.add('sticky-landing');
        } else {
          target[0].classList.remove('sticky-landing');
        }
      }  
    });

  }

  slugIt = (toSlug) => toSlug && toSlug.replace(/[^\w]/g, '-').toLowerCase();

  getSections = (content) => {
    const sections = content.match(/<h.\s+id="(.*?)">(.+?)\s*<\/h/g);
    const subsections = sections.reduce(
        (s, currVal) => { 
          var h1 = currVal.match(/<h1 id="(.*?)">(.*?)<\/h/);
          var h2 = currVal.match(/<h2 id="(.*)">(.*?)<\/h/);

          if(h1) {
            s.push({heading: {id: h1[1], title: h1[2]}, subheading: []});
          } else if (h2) {
            s[s.length-1].subheading.push({id: h2[1], title: h2[2]})
          }
          return s;
        }, []
    );

    console.log(subsections);

    return subsections;
    
  }

  render = () => (
    <div className='wiki-sidebar-container sticky-container'>
      <div className='wiki-sidebar sticky'>
        <nav className='typo-sidebar'>
          <ul className='typo-sidebar-heading'>
            {
              this.props.content && 
              this.getSections(this.props.content).map(section => (
                <li>
                  <a href={`#${section.heading.id}`}>{section.heading.title}</a>
                  { 
                    section.subheading.length > 0 &&
                    <ul className='typo-sidebar-subheading'>
                      { 
                        section.subheading &&
                        section.subheading.map(subhead => (
                          <li><a href={`#${subhead.id}`}>{subhead.title}</a></li>
                        ))
                      }
                    </ul>
                  }
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default WikiSidebar
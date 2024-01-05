import React from 'react'
import Container from '../component/layout/Container'
import Breadcrum from '../component/Breadcrum'

const About = () => {
  return (
    <section>
      <Container>
        <Breadcrum 
          title={window.location.pathname.split('/')[1]}
          linkVal={'home'}  link={'/'}
          currentPage={window.location.pathname.split('/')[1]} currentPageLink={'/about'}
        />
      </Container>
    </section>
  )
}

export default About
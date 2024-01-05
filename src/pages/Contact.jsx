import React from 'react'
import Container from '../component/layout/Container'
import Breadcrum from '../component/Breadcrum'

const Contact = () => {
  return (
    <section>
      <Container>
        <Breadcrum 
          title={window.location.pathname.split('/')[1]}
          linkVal={'home'}  link={'/'}
          currentPage={window.location.pathname.split('/')[1]} currentPageLink={'/contacts'}
        />
      </Container>
    </section>
  )
}

export default Contact
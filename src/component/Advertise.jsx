import React from 'react'
import Container from './layout/Container'
import Img from './layout/Img'
import Flex from './layout/Flex'
import Advertise01 from '../assets/Advertise01.png'
import Advertise02 from '../assets/Advertise02.png'
import Advertise03 from '../assets/Advertise03.png'



const Advertise = () => {
  return (
    <section className='lg:mt-36 mt-12'>
      <Container>
        <Flex className={'sm:gap-10 gap-4 flex-col sm:flex-row'}>
            <div>
              <Img src={Advertise01}/>
            </div>
            <Flex className={'flex-col lg:gap-10 md:gap-5 gap-4'}>
              <Img src={Advertise02}/>
              <Img src={Advertise03}/>
            </Flex>
        </Flex>
    </Container>
    </section>
  )
}

export default Advertise
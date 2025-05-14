import React, { memo } from 'react'
import { Button, Container } from 'react-bootstrap'
import logo from '../../assets/img/logo/sojitra-industries-2.png'
import { Link } from 'react-router-dom'

export default memo(function Header() {
  return (
    <>
      <div className='header'>
        <Container fluid="md">
          <div className='logo py-2 d-flex align-items-center justify-content-between'>
            <img src={logo} alt='sojitra-insutries' width="280px" />
            <Button className='get-in-touch'>GET IN TOUCH</Button>
          </div>
        </Container>
      </div>
      <div className='menu'>
        <Container fluid="md">
          <ul>
            <li><Link href='#'>Home</Link></li>
            <li><Link href='#'>Company</Link></li>
            <li><Link href='#'>Product</Link></li>
            <li><Link href='#'>Quality</Link></li>
            <li><Link href='#'>Contact</Link></li>
          </ul>
        </Container>
      </div>
    </>
  )
})

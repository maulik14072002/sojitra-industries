import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { Link } from 'react-router-dom'

export default memo(function Footer() {
  return (
    <div className='footer'>
        <Container fluid="md">
          <div className='logo_section d-flex align-items-center justify-content-between'>
            <img src='/img/logo/sojitra-industries-2.png' alt='sojitra industires' width="280px"/>
            <div className='on_social d-flex align-items-center gap-3'>
              <Link href='' target="_blank"><ImFacebook /></Link>
              <Link href='https://www.linkedin.com/company/sojitraindustry/' target="_blank"><FaLinkedinIn /></Link>
            </div>
          </div>
        </Container>
    </div>
  )
})

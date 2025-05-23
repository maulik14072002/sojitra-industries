import React, { memo, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default memo(function Header() {               

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div style={{ position: "sticky", top: "0px", zIndex: "999" }}>
        <div className='header'>
          <Container fluid="md">
            <div className='logo py-2 d-flex align-items-center justify-content-between'>
              <img src="/img/logo/sojitra-industries-2.png" alt='sojitra-insutries' width="280px" />
              <div className='d-flex align-items-center gap-4'>
                <Button className='get-in-touch custom-btn'>GET IN TOUCH</Button>
                <Button className='menu-btn' onClick={handleShow}><RiMenu3Line /></Button>
              </div>
            </div>
          </Container>
        </div>
        <div className='menu'>
          <Container fluid="md">
            <ul>
              <li><Link className='active' to={{ pathname: "/" }}>Home</Link></li>
              <li><Link to={{}}>About</Link></li>
              <li><Link to={{}}>Product</Link></li>
              <li><Link to={{}}>Quality</Link></li>
              <li><Link to={{}}>Contact</Link></li>
            </ul>
          </Container>
        </div>
      </div>


      <Modal className='mobile-menu-modal' show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Body>
          <Button onClick={handleClose} className='close-menu d-flex -align-items-center justify-content-center'><IoClose /></Button>
          <div className='mobile-menu mt-4'>
            <ul>
              <li><Link className='active' to={{ pathname: "/" }}>Home</Link></li>
              <li><Link to={{}}>About</Link></li>
              <li><Link to={{}}>Product</Link></li>
              <li><Link to={{}}>Quality</Link></li>
              <li><Link className='pb-0' to={{}}>Contact</Link></li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
})


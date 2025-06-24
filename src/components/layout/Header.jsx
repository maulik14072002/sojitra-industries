import React, { memo, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { ImFacebook } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';

export default memo(function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <>
      <div style={{ position: "sticky", top: "0px", zIndex: "999" }}>
        <div className='header'>
          <Container fluid="md">
            <div className='logo py-2 d-flex align-items-center justify-content-between'>
              <NavLink to={{ pathname: "/" }}>
                <img src="/img/logo/sojitra-company.png" alt='sojitra-insutries' width="190px" />
              </NavLink>
              <div className='d-flex align-items-center gap-4'>
                <div className='on_social d-flex align-items-center gap-3'>
                  <a href='https://www.facebook.com/share/1G7NiTWjzo/' target="_blank"><ImFacebook /></a>
                  <a href='https://www.linkedin.com/company/sojitraindustry/' target="_blank"><FaLinkedinIn /></a>
                </div>
                <Button className='get-in-touch custom-btn' onClick={goToContact}>GET IN TOUCH</Button>
                <Button className='menu-btn' onClick={handleShow}><RiMenu3Line /></Button>
              </div>
            </div>
          </Container>
        </div>
        <div className='menu'>
          <Container fluid="md">
            <ul>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/" }}>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/about" }}>About</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/product" }}>Product</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/quality" }}>Quality</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/contact" }}>Contact</NavLink></li>
            </ul>
          </Container>
        </div>
      </div>


      <Modal className='mobile-menu-modal' show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Body>
          <Button onClick={handleClose} className='close-menu d-flex -align-items-center justify-content-center'><IoClose /></Button>
          <div className='mobile-menu mt-4'>
            <ul>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/" }}>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/about" }}>About</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/product" }}>Product</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to={{ pathname: "/quality" }}>Quality</NavLink></li>
              <li><NavLink className={({ isActive }) => isActive ? 'active' : 'pb-0'} to={{ pathname: "/contact" }}>Contact</NavLink></li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
})


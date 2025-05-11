import React, { memo } from 'react'
import Header from './Header'
import Footer from './Footer'

export default memo(function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
})

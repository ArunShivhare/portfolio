import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arun Shivhare. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

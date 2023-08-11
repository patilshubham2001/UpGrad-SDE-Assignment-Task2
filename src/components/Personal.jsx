import React from 'react'

const Personal = ({email, phone, city, linkedin }) => {
  return (
    <div className='details'>
      <p><i class="fa-solid fa-phone"></i> {phone}</p>
      <p><i class="fa-solid fa-envelope"></i> {email}</p>
      <p><i class="fa-solid fa-location-dot"></i> {city}</p>
      <p><i class="fa-brands fa-linkedin-in"></i> {linkedin}</p>
      <div className='orange-line'></div>
    </div>

  )
}

export default Personal

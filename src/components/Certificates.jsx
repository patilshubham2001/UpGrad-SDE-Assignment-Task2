
import React from 'react'

const Certificates = ({certificates}) => {
  return (
    <div className='certificates'>
        <h2>Certificates</h2>
      {
        certificates.map((certi)=>{
            return <div key={certi.id} style={{display:'flex'}}>
                <div>
                <h3>{certi.certi_name}</h3>
                <p>{certi.certi_link}</p>
                </div>
                <div style={{marginLeft: '150px'}}>
                <p>{certi.certi_start_date}-{certi.certi_end_date}</p>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Certificates

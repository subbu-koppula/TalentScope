import React from 'react'
import styles from './ContactUs.module.css'

const Card = ({icon, Title, Text, data, data2}) => {
  return (
    <div className={styles.card}>
      <i className={`bx bx-${icon} bx-lg`}></i>
      <h2>{Title}</h2>
      <p>{Text}</p>
      <span>
      <p className={styles.data}>{data}</p>
      <p className={styles.data}>{data2}</p>
      </span>
    </div>
  )
}

const ContactUs = () => {
  return (
    <section id='ContactUs' className={styles.section}>
        <div className={styles.container}>
          <Card 
            icon="envelope"
            Title="Email"
            Text="We're here to help you with any inquiries or support."
            data="talentscope.crt@gmail.com"
          />
          <Card 
            icon="phone"
            Title="Phone"
            Text="Reach out to us anytime for assistance or questions."
            data="+91 9177840513"
          />
          <Card 
            icon="map"
            Title="Office"
            Text="Visit us at our office for direct support."
            data="9-76, Behind Meghan Theatre, Lalitha Nagar,"
            data2="Dilsukhnagar, Hyderbad, Telangana 500060"
          />
        </div>
    </section>
  )
}

export default ContactUs
import RoundButton from '../../round-button'

import React from 'react'

const Title = () => {
  return (
    <section>
      <h1>Your Music<br /> Made Simple</h1>
      <p className='subtitle'><strong>Gem music</strong> is a lightweight, easy to use modern&#8209;rich end music application.</p>
      <RoundButton color='black' href='/learn'>Learn More</RoundButton>
      <style jsx>{`
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      h1 {
        text-align: center;
        font-size: 56px;
        font-weight: 300;
        margin: 0;
        padding: 0;
      }
      p {
        text-align: center;
        color: #555555;
        font-size: 16px;
        font-weight: 400;
        margin-top: 26px;
        margin-bottom: 46px;
        margin-left: 15px;
        margin-right: 15px;
      }
      strong {
        color: #000000;
      }
      br {
        display: none;
      }
      @media (max-width: 768px) {
        h1 {
          font-size: 32px;
        }
      }

      @media(max-width: 450px) {
        br {
          display: inline;
        }
      }
    `}</style>
    </section>
  )
}

export default Title
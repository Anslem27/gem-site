import NotificationIndicator from '../../icons/notification-indicator'

function Banner() {
  return <section>
    <a href="https://github.com/Anslem27/gem-site" target="_blank">
      <NotificationIndicator /><span className='highlight'>Gem Music is in development!</span> — Be one of the lucky people to try out Gem in its development stages <span className='released'>Releasing Soon...</span>
    </a>
    <style jsx>{`
      section {
        display: flex;
        justify-content: center;        
        margin-bottom: 50px;
      }

      a {
        text-decoration: none;
        display: flex;
        justify-content: center;   
        align-items: center;
        margin: 0;
        font-size: 14px;
        line-height: 22px;        
        color: #666666;
        background-color: #FAFAFA;
        padding-left: 11px;
        padding-right: 11px;
        border: 1px solid #EAEAEA;
        border-radius: 30px;
        white-space: pre-wrap;
      }

      a:visited,
      a:focus {
        color: #666666;
      }

      a :global(svg) {
        margin-right: 8px;
      }

      .highlight {
        color: black;
      }

      .released {
        padding-left: 32px;
        font-weight: 500;
      }

      @media (max-width: 1000px) {
        section {
          display: none;
        }
      }
    `}</style>
  </section>
}

export default Banner

import { Component } from 'react'
import Video from './intro/video'
import NotificationBanner from './intro/notification-banner'
import Title from './intro/title'

import React from 'react'

const Intro = () => {
  return (
    <>
      <NotificationBanner />
      <Title />
      <Video />
    </>
  )
}

export default Intro
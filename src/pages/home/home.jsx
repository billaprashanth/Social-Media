import React from 'react'
import  Stories from '../../components/stories/Stories.jsx'
import Addpost from '../../components/addPost/Addpost'
import Feeds from '../../components/feeds/Feeds'

export default function home() {
  return (
    <>
    <Stories/>
    <Addpost/>
    <Feeds/>
    </>
  )
}

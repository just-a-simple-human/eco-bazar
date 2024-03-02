import React from 'react'
import styled from 'styled-components'
import {Headings, StyledImg} from '../../default'
import InstIcon from '../../sprites/InstIcon'

const InstLinksContainer = styled.section`
    
  width: 1320px;
  height: 270px;
  margin-block: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`

const PostsContainer = styled.div`
  
  height: 200px;

  display: flex;
  gap: 24px;

`

const Post = styled.a.attrs({target: '_blank'})`
  
  max-height: 200px;
  max-width: 200px;
  border-radius: 10px;
  overflow: hidden;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  & * {

    transition: all .25s;

  }

  & svg {

    position: absolute;
    opacity: 0;

  }

  &:hover {

    & img:first-child {

      scale: 1.25;

    }

    & div,
    & svg {

      opacity: 1;

    }

  }

`

const GreanBackground = styled.div`

  width: 200px;
  height: 200px;
  border-radius: inherit;

  position: absolute;
  left: 0;
  top: 0;
  
  background: rgba(43, 87, 46, 0.8);
  opacity: 0;

`

function InstLinks() {
  
  return (
    <InstLinksContainer>

      <Headings.Heading05 as={'h3'} $semibold='true'>Follow us on Instagram</Headings.Heading05>
      
      <PostsContainer>

        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>

        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost1.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>
        
        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost2.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>

        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost3.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>

        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost4.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>

        <Post href='http://instagram.com/'>
          <StyledImg src={require('../../images/instPosts/InstagramPost5.png')}/>
          <GreanBackground/>
          <InstIcon/>
        </Post>

      </PostsContainer>

    </InstLinksContainer>
  )
}

export default InstLinks
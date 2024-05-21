import React from "react";
import { Headings, StyledImg } from "#common/common.style";
import InstIcon from "#svg/InstIcon";
import { GreanBackground, InstLinksContainer, Post, PostsContainer } from "./InstLinks.style";

function InstLinks() {
  return (
    <InstLinksContainer>
      <Headings.Heading05 as={"h3"} $semibold="true">
        Follow us on Instagram
      </Headings.Heading05>

      <PostsContainer>
        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>

        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost1.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>

        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost2.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>

        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost3.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>

        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost4.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>

        <Post href="http://instagram.com/">
          <StyledImg
            src={require("#images/InstPosts/InstagramPost5.png")}
          />
          <GreanBackground />
          <InstIcon />
        </Post>
      </PostsContainer>
    </InstLinksContainer>
  );
}

export default InstLinks;

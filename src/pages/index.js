import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { Animated } from "react-animated-css"

import Nav from "../components/shared/Nav"
import Footer from "../components/shared/Footer"
import CTA from "../components/shared/CTA"
import Hero from "../components/shared/Hero"

import ButtonAlternate from "../components/buttons/ButtonAlternate"
import ButtonPrimary from "../components/buttons/ButtonPrimary"
import ButtonInline from "../components/buttons/ButtonInline"

import HeaderAngle from "../components/elements/HeaderAngle"
import SectionIcon from "../components/elements/SectionIcon"

import homeHero from "../images/home/home-hero.jpg"
import homeChandler from "../images/home/home-chandler.jpg"
import homeScottsdale from "../images/home/home-scottsdale.jpg"
import homeWestValley from "../images/home/home-west-valley.jpg"
import iconApply from "../images/icon/icon-apply-pink.svg"
import iconCactus from "../images/icon/icon-cactus.svg"
import iconStar from "../images/icon/icon-star.svg"
import iconStarPlain from "../images/icon/icon-star-plain.svg"
import homeSmiling from "../images/home/home-smiling.jpg"
import america from "../images/home/home-america.svg"
import cubes from "../images/shared/shared-cubes.png"
import iconPinkAbout from "../images/icon/icon-pink-about.svg"
import iconPinkLocations from "../images/icon/icon-pink-locations.svg"
import iconPinkReviews from "../images/icon/icon-pink-reviews.svg"
import iconPinkLearnMore from "../images/icon/icon-pink-learn-more.svg"

import _ from "underscore"
import "../base.css"
import "../../node_modules/animate.css/animate.compat.css"
import theme from "../theme"

import {
  StyledIntroBlock,
  StyledLocationBlock,
  StyledReviewBlock,
  StyledStrengthBlock,
  StyledNumbersBlock,
  StyledActionBlock,
} from "./indexStyles"

const HomePage = () => {
  const location_images = [
    { src: homeChandler, text: "Chandler", url: "/" },
    { src: homeScottsdale, text: "Scottsdale", url: "/" },
    { src: homeWestValley, text: "West Valley", url: "/" },
  ]

  const action_items = [
    { img: iconPinkAbout, text: "About", url: "/" },
    { img: iconPinkLocations, text: "Locations", url: "/" },
    { img: iconPinkReviews, text: "Reviews", url: "/" },
    { img: iconPinkLearnMore, text: "Learn More", url: "/" },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Fairway Phoenix – Financing the American Dream since 1996</title>
      </Helmet>
      <Nav />
      <Hero img={homeHero}>
        <Animated animationIn="fadeInUp" animationInDelay="80">
          <HeaderAngle text="Financing the American Dream." />
        </Animated>
      </Hero>
      <StyledIntroBlock>
        <SectionIcon img={iconCactus} />
        <div>
          <h2>We are your Metro Phoenix mortgage experts.</h2>
          <p>
            Fairway Independent Mortgage Corporation has been a trusted local
            mortgage lender for over twenty years. No matter where you are on
            your homebuying journey, our experienced team is here to help.
          </p>
        </div>
      </StyledIntroBlock>
      <StyledLocationBlock bg={cubes}>
        <div className="wrapper">
          {location_images.map((value, index) => {
            return (
              <Link className="item" to={value.url} key={index}>
                <div className="overlay"></div>
                <img src={value.src} width="100%" alt="" />
                <p>{value.text}</p>
              </Link>
            )
          })}
        </div>
        <div className="dark-section"></div>
      </StyledLocationBlock>
      <StyledReviewBlock>
        <div className="wrapper">
          <div className="photo">
            <img src={homeSmiling} width="100%" alt="" />
          </div>
          <div className="text-wrapper">
            <div className="star-wrapper">
              {_(5).times(i => (
                <div className="star" key={i}>
                  <img src={iconStarPlain} width="100%" alt="" />
                </div>
              ))}
            </div>
            <h2>
              &ldquo;Fairway is, by far, the best mortgage lender I have ever
              worked with.&rdquo;
            </h2>
            <p>Stuart T. (Scottsdale)</p>
            <ButtonPrimary url="/" text="Read More Reviews" />
          </div>
        </div>
      </StyledReviewBlock>
      <StyledStrengthBlock>
        <SectionIcon img={iconStar} />
        <h2>National Strength and Hometown Service</h2>
        <p>
          With over <strong>500 branches nationwide</strong> and corporate
          offices in Wisconsin and Texas, we have both the experience and the
          manpower to tackle even the{" "}
          <strong>toughest lending situations.</strong>
        </p>
        <p>
          Our branch of more than 50 experienced mortgage professionals serves{" "}
          <strong>the entire Phoenix area,</strong> from San Tan Valley to Sun
          City and everything in between. With this comes and extensive network
          of real estate agents, contractors, and other housing professionals.
        </p>
        <p>
          We guide our clients through the homebuying process with a personal
          touch, providing essential guidance to make sure your loan closes{" "}
          <strong>quickly, smoothly, and right on time.</strong>
        </p>
      </StyledStrengthBlock>
      <StyledNumbersBlock>
        <>
          <h2>By the Numbers:</h2>
          <div className="item">
            <p>$39.15 Billion in Loan Volume</p>
          </div>
          <div className="item">
            <p>7,000+ Employees Nationwide</p>
          </div>
          <div className="item">
            <p>
              &ldquo;Best FHA Lender in America&rdquo;
              <br />
              <span className="attrib">(Nerdwallet &ndash; 2020)</span>
            </p>
          </div>
          <img src={america} width="100%" alt="" />
        </>
      </StyledNumbersBlock>
      <CTA>
        <SectionIcon img={iconApply} />
        <h1>Start your approval online today</h1>
        <p>
          Completing our initial application takes{" "}
          <strong>less than ten minutes.</strong> One of our experienced loan
          originators will reach out to explain your options and help you find
          the <strong>best loan for your needs.</strong>
        </p>
        <span>
          <ButtonAlternate url="/" text="Get Your Decision" />
        </span>
      </CTA>
      <StyledActionBlock>
        {action_items.map((value, index) => {
          return (
            <Link className="item" to={value.url} key={index}>
              <img src={value.img} width="100%" alt="" />
              <ButtonInline text={value.text} />
            </Link>
          )
        })}
      </StyledActionBlock>
      <Footer />
    </ThemeProvider>
  )
}

export default HomePage

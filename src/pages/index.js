import React from "react"

import Nav from "../components/shared/Nav"
import Footer from "../components/shared/Footer"
import CTA from "../components/shared/CTA"

import HeroBlock from "../components/blocks/HeroBlock"
import GrayBlock from "../components/blocks/GrayBlock"
import WhiteBlock from "../components/blocks/WhiteBlock"

import ButtonAlternate from "../components/buttons/ButtonAlternate"
import ButtonPrimary from "../components/buttons/ButtonPrimary"

import HeaderAngle from "../components/elements/HeaderAngle"

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

import _ from "underscore"
import "../base.css"

const HomePage = () => {
  const location_images = [
    { src: homeChandler, text: "Chandler" },
    { src: homeScottsdale, text: "Scottsdale" },
    { src: homeWestValley, text: "West Valley" },
  ]

  return (
    <>
      <Nav />
      <HeroBlock img={homeHero}>
        <HeaderAngle text="Financing the American Dream." />
      </HeroBlock>
      <WhiteBlock>
        <div className="icon-wrapper">
          <img src={iconCactus} width="100%" alt="" />
        </div>
        <div className="text">
          <h2>We are your Metro Phoenix mortgage experts.</h2>
          <p>
            Fairway Independent Mortgage Corporation has been a trusted local
            mortgage lender for over twenty years. No matter where you are on
            your homebuying journey, our experienced team is here to help.
          </p>
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="images-block">
          {location_images.map((value, index) => {
            return (
              <div key={index} className="images-block-item">
                <div className="images-block-image">
                  <img src={value.src} width="100%" alt="" />
                </div>
                <div className="images-block-text">
                  <p>{value.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </WhiteBlock>
      <WhiteBlock>
        <div className="review-block-photo">
          <img src={homeSmiling} width="100%" alt="" />
        </div>
        <div className="review-block-review">
          <div className="review-block-star-wrapper">
            {_(5).times(i => (
              <div className="review-block-star" key={i}>
                <img src={iconStarPlain} width="100%" alt="" />
              </div>
            ))}
          </div>
          <div className="review-block-text">
            <h2>
              &ldquo;Fairway is, by far, the best mortgage lender I have ever
              worked with.&rdquo;
            </h2>
            <p>Stuart T. (Scottsdale)</p>
          </div>
        </div>

        <ButtonPrimary url="/" text="Read More Reviews" />
      </WhiteBlock>
      <GrayBlock>
        <img src={iconStar} width="100%" alt="" />
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
      </GrayBlock>
      <WhiteBlock>
        <>
          <h2>By the Numbers:</h2>
          <div className="numbersItem">
            <p>$39.15 Billion in Loan Volume</p>
          </div>
          <div className="numbersItem">
            <p>7,000+ Employees Nationwide</p>
          </div>
          <div className="numbersItem">
            <p>&ldquo;Best FHA Lender in America&rdquo;</p>
            <p className="attrib">(Nerdwallet &ndash; 2020)</p>
          </div>
          <div className="numbersImage">
            <img src={america} width="100%" alt="" />
          </div>
        </>
      </WhiteBlock>
      <CTA>
        <img src={iconApply} width="100%" alt="" />
        <h1 className="cta-header">Start your approval online today</h1>
        <p className="cta-text">
          Completing our initial application takes{" "}
          <strong>less than ten minutes.</strong> One of our experienced loan
          originators will reach out to explain your options and help you find
          the <strong>best loan for your needs.</strong>
        </p>
        <ButtonAlternate url="/" text="Get Your Decision" />
      </CTA>
      <Footer />
    </>
  )
}

export default HomePage

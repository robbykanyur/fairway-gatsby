import vars from "../vars"
import styled from "styled-components"

export const StyledIntroBlock = styled.div`
  background: ${vars.colorWhite};
  padding: ${vars.spacer5XL} 0 85px;
  text-align: center;
  h2 {
    ${props => props.theme.headingSans2};
  }
  p {
    width: 700px;
    margin: 0 auto;
  }
`

export const StyledLocationBlock = styled.div`
  background: ${vars.colorWhite};
  position: relative;
  .wrapper {
    width: 78vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .dark-section {
    position: absolute;
    z-index: 3000;
    left: 0;
    background: ${vars.grayDarkOne};
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    overflow: hidden;
    &::before {
      content: "";
      width: 120%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: ${props => `url(${props.bg})`};
      opacity: 0.25;
      z-index: 5000;
      transform: rotate(-6deg);
      border: 1px solid rgba(255, 255, 255, 0.25);
    }
  }
  .item {
    display: block;
    width: 23vw;
    height: 28vw;
    position: relative;
    overflow: hidden;
    &:hover img {
      transform: scale(1.02);
    }
    p {
      position: absolute;
      bottom: 0;
      display: block;
      background: ${vars.colorBlack};
      width: 100%;
      color: ${vars.colorWhite};
      text-align: center;
      font-family: ${vars.sans};
      text-transform: uppercase;
      line-height: 40px;
      font-size: ${vars.typeS};
      font-weight: 500;
      letter-spacing: 2px;
    }
    img {
      position: relative;
      z-index: 4000;
      transition: all 0.2s ease-in-out;
    }
    .overlay {
      position: absolute;
      z-index: 5000;
      background: rgba(255, 255, 255, 0.2);
      clip-path: polygon(100% 65%, 0% 90%, 100% 100%);
      width: 100%;
      height: 100%;
    }
    p {
      position: absolute;
      z-index: 6000;
    }
  }
`

export const StyledReviewBlock = styled.div`
  background: ${vars.colorWhite};
  position: relative;
  overflow: hidden;
  .wrapper {
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .photo {
    width: 960px;
    position: absolute;
    z-index: 4000;
    left: -220px;
    top: 20px;
  }
  .text-wrapper {
    position: relative;
    z-index: 5000;
    text-align: right;
    right: 10vw;
    width: 800px;
    margin: 220px 0;
    .star-wrapper {
      margin-bottom: ${vars.spacer2XS};
    }
    .star {
      width: 45px;
      display: inline-block;
      margin-right: ${vars.spacerM};
    }
    h2 {
      font-family: ${vars.serif};
      font-size: ${vars.type3XL};
      text-transform: none;
      font-weight: 500;
      margin-bottom: ${vars.spacerXS};
    }
    p {
      margin-bottom: ${vars.spacerXS};
    }
  }
`

export const StyledStrengthBlock = styled.div`
  position: relative;
  z-index: 5000;
  background: ${vars.colorOffWhite};
  padding: ${vars.spacer5XL} 0 150px;
  h2 {
    ${props => props.theme.headingSans2}
  }
  p {
    width: 750px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${vars.typeL};
  }
`

export const StyledNumbersBlock = styled.div`
  background: ${vars.colorWhite};
  position: relative;
  z-index: 6000;
  padding: 100px 0 80px;
  text-align: center;
  img {
    width: 94%;
    position: absolute;
    top: -7%;
    left: 3%;
  }
  h2 {
    color: ${vars.colorRed};
    font-size: ${vars.type5XL};
    margin-bottom: ${vars.spacer2XL};
  }
  .item {
    position: relative;
    z-index: 7000;
    display: block;
    border: 1px solid #cbcbcb;
    background-color: rgba(255, 255, 255, 0.75);
    width: 900px;
    margin: 0 auto ${vars.spacerXL};
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(4) {
      p {
        padding-top: 13px;
      }
    }
    p {
      padding-top: 6px;
      font-family: ${vars.sans};
      text-transform: uppercase;
      color: ${vars.grayDarkOne};
      font-weight: 900;
      font-size: ${vars.type3XL};
      line-height: ${vars.typeM};
    }
    span {
      font-size: ${vars.typeXS};
      font-weight: 700;
    }
  }
`

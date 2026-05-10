import styled from 'styled-components';
import usePortfolioInteractions from './usePortfolioInteractions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  const { scrollBtnRef } = usePortfolioInteractions();

  return (
    <StyledWrapper>
      <button ref={scrollBtnRef} className="button scroll-top">
        <FontAwesomeIcon className="svgIcon" icon={faCircleUp} />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    color: black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(30, 30, 30);
    border: transparent;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
  }

  .svgIcon {
    width: 27px;
    height: 27px;
    color: #fff;
    transition-duration: 0.3s;
  }

  // .svgIcon path {
  //   fill: rgba(255, 94, 0, 0.7);
  // }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background: linear-gradient(95deg, #ff5e00, #ff9833);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 94, 0, 0.5);
    align-items: center;
    border: transparent;
  }

  .button:hover .svgIcon {
    /* width: 20px; */
    transition-duration: 0.3s;
    transform: translateY(-200%);
  }

  .button::before {
    color: #000;
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    /* transition-duration: .3s; */
    font-size: 0px;
  }

  .button:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    /* transform: translateY(-30px); */
    transition-duration: 0.3s;
  }`;

export default Button;

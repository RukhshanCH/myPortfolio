import styled from 'styled-components';
import usePortfolioInteractions from './usePortfolioInteractions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Button = () => {
  const { scrollBtnRef } = usePortfolioInteractions();

  return (
    <StyledWrapper>
      <button ref={scrollBtnRef} className="button scroll-top" aria-label="Back to top">
        <FontAwesomeIcon className="svgIcon" icon={faArrowUp} />
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    color: var(--button-text);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--button-bg-start), var(--button-bg-end));
    border: 1px solid var(--button-border);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3), 0 0 16px var(--button-glow);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 0.3s;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
  }

  .button.show {
    opacity: 1;
    visibility: visible;
  }

  .svgIcon {
    width: 20px;
    height: 20px;
    color: var(--button-icon-color, #fff);
    transition-duration: 0.3s;
  }

  // .svgIcon path {
  //   fill: rgba(255, 94, 0, 0.7);
  // }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background: linear-gradient(95deg, var(--primary), var(--secondary));
    transform: translateY(-3px);
    box-shadow: 0 8px 25px var(--shadow-color5), 0 0 24px var(--shadow-color3);
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

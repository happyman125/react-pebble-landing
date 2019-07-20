import React from 'react';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './card';

import lollipopIcon from '../images/lollipop.png';
import shackIcon from '../images/shackIcon.png';
import fingerIcon from '../images/pointing_finger.png';

import './problemSection.sass';

const ProblemSection = () => (
  <div className="problem-section">
    <Container>
      <Centrifier>
        <div className="problem-section__header-box">
          <p className="problem-section__header-box__heading">Why Pebble?</p>
          <p className="problem-section__header-box__subtitle">
            We are solving key issues that the
          </p>
          <p className="problem-section__header-box__subtitle">
            stone industry faces today
          </p>
        </div>
      </Centrifier>
      <Centrifier>
        <div className="problem-section__card-box">
          <Card type="problem">
            <p className="card__heading">No Healthy Food</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="lollipop emoji">
                <img className="card__main-emoji__img" src={lollipopIcon} />
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volup-tate velit esse cillum dolore eu fugiat
              nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  <img className="card__finger" src={fingerIcon} />
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
          <Card type="problem">
            <p className="card__heading">High Housing Costs</p>
            <p className="card__main-emoji">
              <span role="img" aria-label="shack">
                <img className="card__main-emoji__img" src={shackIcon} />
              </span>
            </p>
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in volup-tate velit esse cillum dolore eu fugiat
              nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut
            </p>
            <Centrifier>
              <p className="card__read-more">
                <span role="img" aria-label="pointing finger">
                  <img className="card__finger" src={fingerIcon} />
                </span>
                Read more
              </p>
            </Centrifier>
          </Card>
        </div>
      </Centrifier>
    </Container>
  </div>
);

export default ProblemSection;

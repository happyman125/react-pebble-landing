import React, { Fragment, Component } from 'react';
import Img from 'gatsby-image';
import { Spring, animated } from 'react-spring';
import Waypoint from 'react-waypoint';

import Container from './helperComponents/container';
import Centrifier from './helperComponents/centrifier';
import Card from './helperComponents/card';
import FadeUp from './helperComponents/fadeUp';

import pebble1 from '../images/pebbles/blue_pebble1.svg';

import './problemSection.sass';

const FingerSpring = ({ children, toggleFinger }) => (
  <Spring
    native
    from={{ transform: 'translateX(0px) translateY(1.5px)' }}
    to={{
      transform: toggleFinger
        ? 'translateX(2px) translateY(1.5px)'
        : 'translateX(0px) translateY(1.5px)',
    }}
    config={{ friction: 6 }}
  >
    {props => <animated.span style={props}>{children}</animated.span>}
  </Spring>
);

class ProblemCardContent extends Component {
  state = {
    toggleFinger: false,
  };

  onReadEnter = () => {
    if (!this.state.toggleFinger) {
      this.setState({ toggleFinger: true });
    }
  };

  onReadLeave = () => {
    if (this.state.toggleFinger) {
      this.setState({ toggleFinger: false });
    }
  };

  render() {
    return (
      <Fragment>
        <p className="card__heading">{this.props.heading}</p>
        <div className="card__main-emoji card__main-emoji--problem">
          <span>
            <Img
              alt={this.props.alt}
              className="card__main-emoji__img"
              fixed={this.props.emoji.childImageSharp.fixed}
            />
          </span>
        </div>
        <p className="card__text">{this.props.text}</p>
        <Centrifier>
          <div className="card__read-more">
            <FingerSpring toggleFinger={this.state.toggleFinger}>
              <Img
                alt="pointing finger"
                className="card__finger"
                fixed={this.props.fingerEmoji.childImageSharp.fixed}
              />
            </FingerSpring>
            <p
              onMouseEnter={this.onReadEnter}
              onMouseLeave={this.onReadLeave}
              style={{ display: 'inline' }}
            >
              Read more
            </p>
          </div>
        </Centrifier>
      </Fragment>
    );
  }
}

class ProblemSection extends Component {
  state = {
    headingUp: false,
    subtitleUp: false,
    contentUp: false,
  };
  onContentWaypointEnter = () => {
    this.setState({ contentUp: true });
  };

  onHeadingWaypointEnter = () => {
    this.setState({ headingUp: true });
  };

  onSubtitleWaypointEnter = () => {
    this.setState({ subtitleUp: true });
  };

  renderPebbles = () => {
    const pebbleList = Array(5)
      .fill(0)
      .map((item, index) => (
        <img
          key={`problem pebble: ${index}`}
          alt=""
          className={`problem-section__pebble-box__pebble${index + 1}`}
          src={pebble1}
        />
      ));
    return pebbleList;
  };

  render() {
    return (
      <div className="problem-section">
        <div className="problem-section__pebble-box">
          {this.renderPebbles()}
        </div>
        <Container>
          <Centrifier>
            <div className="problem-section__header-box">
              <Waypoint
                bottomOffset="20px"
                onEnter={this.onHeadingWaypointEnter}
              >
                <div>
                  <FadeUp fadeUp={this.state.headingUp}>
                    <p className="problem-section__header-box__heading">
                      Why Pebble?
                    </p>
                  </FadeUp>
                </div>
              </Waypoint>
              <Waypoint onEnter={this.onSubtitleWaypointEnter}>
                <div>
                  <FadeUp fadeUp={this.state.subtitleUp}>
                    <p className="problem-section__header-box__subtitle">
                      We are solving key issues that the
                    </p>
                    <p className="problem-section__header-box__subtitle">
                      stone industry faces today
                    </p>
                  </FadeUp>
                </div>
              </Waypoint>
            </div>
          </Centrifier>
          <Centrifier>
            <Waypoint bottomOffset="50px" onEnter={this.onContentWaypointEnter}>
              <div>
                <FadeUp fadeUp={this.state.contentUp}>
                  <div className="problem-section__card-box">
                    <Card type="problem">
                      <ProblemCardContent
                        heading="No Healthy Food"
                        emoji={this.props.lollipopEmoji}
                        alt="lollipop emoji"
                        text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volup-tate velit esse cillum dolore eu fugiat
          nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
                        fingerEmoji={this.props.fingerEmoji}
                      />
                    </Card>
                    <Card type="problem">
                      <ProblemCardContent
                        heading="High Housing Costs"
                        emoji={this.props.shackEmoji}
                        alt="shack emoji"
                        text="Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco labo-ris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in volup-tate velit esse cillum dolore eu fugiat
          nulla paria-tur. Excepteur sint aliquip ex ea commodo ea ut"
                        fingerEmoji={this.props.fingerEmoji}
                      />
                    </Card>
                  </div>
                </FadeUp>
              </div>
            </Waypoint>
          </Centrifier>
        </Container>
      </div>
    );
  }
}

export default ProblemSection;

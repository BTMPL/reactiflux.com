import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { MenuIcon, Reactiflux } from '../assets/logos';
import Carousel from 'nuka-carousel';

export const Header = styled.header`
  display: flex;
  padding: 24px 32px;
  max-width: 1440px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 2;
`;

export const Navigation = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    overflow-y: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  display: inline-block;
  width: 59px;
  height: 52px;
  background: url(${Reactiflux});
  text-indent: -9999px;
  z-index: 3;
`;

export const Arrow = styled.div`
  display: none;
  width: 28px;
  height: 20px;
  color: #dd1d64;
  z-index: 1;
  background: url(${MenuIcon});
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export const MenuToggle = ({ onClick, menuActive }) =>
  <Arrow onClick={ onClick } style={{ transform: menuActive ? 'rotate(180deg)': 'rotate(0deg)' }} />

export const StyledLink = styled(Link)`
  color: #dd1d64;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;


export const NavigationLink = styled(StyledLink)`
  padding-bottom: 6px;
  margin-right: 40px;
  border-bottom: solid 4px rgba(255, 255, 255, 0);
  transition: all 175ms cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover {
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 6px solid #02d8ff;
  }
  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: 768px) {
    margin-right: 0px;
    font-size: 30px;
    line-height: 30px;
  }
`;

export const SideBarInner = styled.div`
  display: inline-flex;
  flex-flow: column;
  flex-basis: 30%;
  width: 100%;
  padding-left: 0;
  padding-right: 20px;
  @media (min-width: 768px) {
    padding-left: 30px;
  }
  @media (max-width: 768px) {
    flex-basis: auto;
    max-width: 300px;
    align-items: center;
    align-self: flex-start;
  }
`;

export const ReadMore = styled.div`
  display: inline-flex;
  width: 100%;
  margin-bottom: 20px;
  color: #dd1d64;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkList = styled.ul`
  margin-left: 0;
`;

export const FrontPage = styled.main`
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 425px) {
    align-items: center;
  }
`;

export const TitleBox = styled.div`
  position: relative;
  flex-basis: 100%;
  align-self: flex-start;
`;

export const Title = styled.h1`
  color: #02d8ff;
  font-size: 200px;
  line-height: 200px;
  letter-spacing: -13px;
  font-family: 'Space Mono', monospace;
  align-self: flex-start;
  flex-basis: 100%;
  min-height: 60px;
  @media (max-width: 1200px) {
    font-size: 180px;
    line-height: 180px;
  }
  @media (max-width: 1020px) {
    font-size: 140px;
    line-height: 140px;
  }
  @media (max-width: 700px) {
    font-size: 80px;
    line-height: 80px;
    letter-spacing: -8px;
  }
  @media (max-width: 420px) {
    font-size: 55px;
    line-height: 55px;
    letter-spacing: -6px;
  }
`;

export const SmallTitle = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  color: #02d8ff;
  letter-spacing: -4px;
  font-family: 'Space Mono', monospace;
  align-self: flex-start;
  width: 100%;
  min-height: 4rem;
`;

export const Subtitle = styled.span`
  position: absolute;
  color: #dd1d64;
  font-size: 36px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  right: -40px;
  top: 37px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    right: -60px;
    top: 34px;
  }
  @media (max-width: 1020px) {
    font-size: 26px;
    line-height: 26px;
    top: 23px;
    right: -40px;
  }
  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 20px;
    right: 0px;
  }
  @media (max-width: 700px) {
    font-size: 15px;
    line-height: 15px;
    top: 12px;
    right: -30px;
  }
  @media (max-width: 420px) {
    font-size: 12px;
    line-height: 12px;
    top: 10px;
    right: -24px;
  }
`;

export const Text = styled.p`
  font-size: ${32/19}rem;
  font-weight: 500;
  line-height: 1.5;
  color: #52244f;
  letter-spacing: -1px;
  @media (max-width: 425px) {
    font-size: 19px;
  }
`;

export const Buttons = styled.div`
  display: inline-flex;
  min-height: 72px;
  @media (max-width: 425px) {
    flex-flow: column;
  }
`;

export const Button = styled(Link)`
  display: inline-block;
  height: ${72/19}rem;
  width: ${320/19}rem;
  border: 3px solid;
  margin-bottom: 20px;
  border-radius: 100px;
  border-color: #dd1d64;
  text-align: center;
  text-decoration: none;
  font-size: ${24/19}rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: ${66/19}rem;
  color: ${props => props.primary ? '#ffffff' : '#dd1d64'};
  background-color: ${props => props.primary ? '#dd1d64' : '#ffffff'};
  transition: all 175ms ease;
  &:hover {
    color: ${props => props.primary ? '#ffffff' : '#ffffff'};
    background-color: ${props => props.primary ? '#ba1853' : '#dd1d64'};
  }
  &:first-child {
    margin-right: 32px;
  }
  @media (max-width: 425px) {
    &:first-child {
      margin-right: 0;
    }
  }
`;

const MovedLink = styled.a`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  overflow: hidden;
  img {
    margin-bottom: 0;
  }
`;

export const IconLink = ({ to, title, src, alt }) =>
  <MovedLink href={to} title={title}>
    <img src={src} alt={alt}/>
  </MovedLink>

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 24px;
  max-width: 1240px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 765px) {
    flex-flow: column;
  }
`;

export const Copyright = styled.p`
  color: #52244f;
  line-height: 19px;
  margin-bottom: 6px;
`;
export const Credits = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin-bottom: 6px;
  color: #52244f;
  font-family: 'Space Mono', monospace;
`;

export const SocialLinks = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (max-width: 765px) {
    flex-flow: column wrap;
    align-items: center;
  }
`;

export const MarkdownContainer = styled.div`
  display: inline-flex;
  flex-flow: column;
  flex-basis: ${props => props.transcript ? '70%' : '70%'};
  max-width:  ${props => props.transcript ? '1192px' : '800px'};
  @media (max-width: 768px) {
    flex-basis: auto;
  }
`;

export const MarkdownStats = styled.div`
  width: 100%;
`;

export const TopContributors = styled.div`
  position: relative;
`;

export const StatsMonth = styled.h1`
  font-size: 10.421052632rem;
  color: #02d8ff;
  letter-spacing: -13px;
  line-height: 8.421052632rem;
  font-family: 'Space Mono', monospace;
  @media (max-width: 768px) {
    font-size: 8.421052632rem;
  }
  @media (max-width: 667px) {
      font-size: 6.421052632rem;
      letter-spacing: -5px;
  }
  @media (max-width: 375px) {
      font-size: 4.421052632rem;
      letter-spacing: 0;
  }
`;

export const StatsMonthTitle = styled.h2`
  position:absolute;
  top: 10px;
  right: 140px;
  color: #dd1d64;
  @media (max-width: 1024px) {
    right: 0;
    font-size: 1.5em;
  }
  @media (max-width: 768px) {
    right: 0;
    top: -10px;
    font-size: 1.5em;
  }
`;

export const TopContributorsList = styled.div`
  width: 100%;
  padding-top: 50px;

  @media (max-width: 375px) {
    padding-top: 0;
  }
`;

export const LiveStats = styled.div`
  margin-top: 16%;
`;

export const LiveStatsTitle = styled.h3`
  color: #dd1d64;
  font-size: 1.8em;
  text-transform: uppercase;
  font-style: italic;
  font-weight:  100;
  margin-bottom: 10%;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

export const SideBar = ({ children, sidebarActive, toggle, isToc, toc }) =>
  <SideBarInner>
    <ReadMore onClick={toggle}>
      Read { sidebarActive ? 'less' : 'more' } <MenuToggle menuActive={sidebarActive} />
    </ReadMore>
    { isToc ?
      <div style={{ display: sidebarActive ? 'block' : 'none' }} dangerouslySetInnerHTML={{ __html: toc }} /> :
      <LinkList style={{ display: sidebarActive ? 'list-item' : 'none' }}>{children}</LinkList>
    }
  </SideBarInner>

const slideDots = {
  component: React.createClass({
    displayName: 'component',

    render: function render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
      return React.createElement(
        'ul',
        { style: self.getListStyles() },
        indexes.map(function (index) {
          return React.createElement(
            'li',
            { style: self.getListItemStyles(), key: index },
            React.createElement(
              'button',
              {
                style: self.getButtonStyles(self.props.currentSlide === index),
                onClick: self.props.goToSlide.bind(null, index) },
              '•'
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc) {
      var arr = [];
      for (var i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active) {
      return {
        background: 'transparent',
        color: active ? '#dd1d64'  : '#02d8ff',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 48,
        border: 'none',
        borderRadius: '50%'
      };
    }
  }),
  position: 'BottomCenter'
}

export const Stats = ({ children, post, months, contributors, isFetchingData}) => 
  <MarkdownStats>
  {isFetchingData ? <div>{'Data are loading ....'}</div> :
    <div>
    <Carousel autoplay={false} decorators={[slideDots]} wrapAround={true} initialSlideHeight={350}>
      {months.map((month,index) => {
        let monthlyContributor = contributors[month]
        return (
          <div key={index}>
            <TopContributors>
            <StatsMonthTitle>TOP CONTRIBUTORS FOR</StatsMonthTitle>
            <StatsMonth>{month}</StatsMonth>
          </TopContributors>
          <TopContributorsList>
            <Contributor index={1} name={monthlyContributor[0]._id} numberOfMessages={monthlyContributor[0].count} />
            <Contributor index={2} name={monthlyContributor[1]._id} numberOfMessages={monthlyContributor[1].count} />
            <Contributor index={3} name={monthlyContributor[2]._id} numberOfMessages={monthlyContributor[2].count} />
            <Contributor index={4} name={monthlyContributor[3]._id} numberOfMessages={monthlyContributor[3].count} />
            <Contributor index={5} name={monthlyContributor[4]._id} numberOfMessages={monthlyContributor[4].count} />
          </TopContributorsList>
        </div>
        )
      })}
    </Carousel>
    <LiveStats>
      <LiveStatsTitle>Live stats from pipend</LiveStatsTitle>
      <div className="members">
        <h2>Members</h2>
        <h1>19,499</h1>
      </div>
      <div className="messagesSent">
        <h2>Messages Sent</h2>
        <h1>263,993</h1>
      </div>
      <div className="messagesSentToday">
        <h2>Messages Sent Today</h2>
        <h1>1,102</h1>
      </div>
      <div className="messagesSentToday">
        <h2>User Online Today</h2>
        <h1>3,389</h1>
      </div>
    </LiveStats>
    </div>
  }
  </MarkdownStats>




export const Contributor = ({index, name, numberOfMessages}) => 
  <span className={(index > 3) ? "contributor wider" : "contributor"}>
    <div className="position">{index}</div>
    <div className="name">{name}</div>
    <div className="numberOfMessages">{numberOfMessages} messages</div>
  </span>
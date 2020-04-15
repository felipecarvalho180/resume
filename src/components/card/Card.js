
import React from 'react';

import styled, { css } from 'styled-components';
import { CalendarAlt } from '@styled-icons/boxicons-regular/CalendarAlt';
import { Building } from '@styled-icons/fa-regular/Building';
import { LocationOn } from '@styled-icons/material-outlined/LocationOn';

import { GRAY, LIGHT_GREEN } from '../../styles/colors/Colors';
import { SubTitle, BaseLabel, iconBaseStyle } from '../../styles/component/ComponentStyles';
import { mqDesktop, mqTablet } from '../../styles/helper/HelperStyles';

export default function Card({
  value,
  type,
  company,
  location,
  timeLapsed,
}) {
  return (
    <Wrapper>
      <ContentWrapper>
        <CardSubTitle>{ value }</CardSubTitle>
        { type && (
          <Badge>
            <BadgeLabel>{ type }</BadgeLabel>
          </Badge>
        ) }
      </ContentWrapper>
      <InfoWrapper>
        <InlineWrapper>
          <BuildingIcon />
          <CardLabel>{ company }</CardLabel>
        </InlineWrapper>
        { location && (
          <InlineWrapper>
            <LocationIcon />
            <CardLabel>{ location }</CardLabel>
          </InlineWrapper>
        ) }
        <InlineWrapper>
          <CalendarIcon />
          <CardLabel>{ timeLapsed }</CardLabel>
        </InlineWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${ GRAY };
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;

  & > div:first-child {
    margin-bottom: 10px;
  }

  ${ mqTablet(() => css`
    border-right: none;
    border-left: none;
    border-top: none;
    border-radius: 0;
  `) }
`;

const cardIconBaseStyle = css`
  ${ iconBaseStyle };
  height: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${ mqTablet(() => css`
    justify-content: space-between;
  `) };
`;

const CardSubTitle = styled(SubTitle)`
  text-align: center;
  margin-bottom: 10px;
  
  ${ mqTablet(() => css`
    text-align: justify;
    margin-right: 30px;
  `) };
`;

const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Badge = styled.div`
  display: flex;
  min-width: 130px;
  justify-content: center;
  background-color: ${ LIGHT_GREEN };
  padding: 5px;
  border-radius: 65px;
  height: 30px;
  margin-bottom: 10px;

`;

const BadgeLabel = styled(BaseLabel)`
  font-weight: bold;
  align-self: center;
`;

const CalendarIcon = styled(CalendarAlt)`
  ${ cardIconBaseStyle };
`;

const CardLabel = styled(BaseLabel)`
  color: ${ GRAY };
  font-weight: bold;
`;

const InfoWrapper = styled(InlineWrapper)`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  gap: 3px;

  ${ mqDesktop(() => css`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  `) }
`;

const BuildingIcon = styled(Building)`
  ${ cardIconBaseStyle };
  margin-right: 5px;
`;

const LocationIcon = styled(LocationOn)`
  ${ cardIconBaseStyle };
`;
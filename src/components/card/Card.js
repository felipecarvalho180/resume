
import React from 'react';

import { Building } from '@styled-icons/fa-regular/Building';
import { CalendarAlt } from '@styled-icons/boxicons-regular/CalendarAlt';
import { LocationOn } from '@styled-icons/material-outlined/LocationOn';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { DARK_GRAY, ORANGE, WHITE } from '../../styles/colors/Colors';
import { mqDesktop, mqTablet } from '../../styles/helper/HelperStyles';

export default function Card({
  value,
  type,
  description,
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
      { description && (
        <DescriptionLabel>{ description }</DescriptionLabel>
      ) }
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
  border: solid 1px ${ ORANGE };
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
  align-self: center;
  color: ${ DARK_GRAY };
  margin-right: 5px;
  height: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ mqTablet(() => css`
    flex-direction: row;
    justify-content: space-between;
  `) };
`;

const CardSubTitle = styled.label`
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  
  ${ mqTablet(() => css`
    margin-right: 30px;
    text-align: justify;
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
  background-color: ${ ORANGE };
  padding: 5px;
  border-radius: 65px;
  height: 30px;
  margin-bottom: 10px;

`;

const BadgeLabel = styled.label`
  color: ${ WHITE };
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

const DescriptionLabel = styled.label`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: justify;
`;

const CalendarIcon = styled(CalendarAlt)`
  ${ cardIconBaseStyle };
`;

const CardLabel = styled.label`
  font-size: 16px;
  color: ${ DARK_GRAY };
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

Card.propTypes = {
  value: propTypes.string,
  type: propTypes.string,
  company: propTypes.string,
  location: propTypes.string,
  timeLapsed: propTypes.string,
};
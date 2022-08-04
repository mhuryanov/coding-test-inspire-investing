import React from 'react';
import { Box, Text, List, ListItem, Flex } from '@chakra-ui/react';
import { FundModel } from '../models/fund';

interface FundProps {
  fund: FundModel;
}

const Fund = ({ fund }: FundProps): JSX.Element => {
  return (
    <Box p={5}>
      <Flex justify='space-between' wrap='wrap'>
        <Box>
          <List>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Id:{' '}
              </Text>
              {fund.id}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Ticker:{' '}
              </Text>
              {fund.ticker}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Name:{' '}
              </Text>
              {fund.name}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Impact Score:{' '}
              </Text>
              {fund.impactScore}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Market Capitalization:{' '}
              </Text>
              {fund.marketCapitalization}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Domestic:{' '}
              </Text>
              {fund.domestic}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                UniqueKey:{' '}
              </Text>
              {fund.uniqueKey}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Industry:{' '}
              </Text>
              {fund.industry}
            </ListItem>
          </List>
        </Box>
        <Box>
          <List>
            <Text>Exchange:</Text>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Name:{' '}
              </Text>
              {fund.exchange.name}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Description:{' '}
              </Text>
              Description: {fund.exchange.description}
            </ListItem>
          </List>
          <List>
            <Text>Exchange Location:</Text>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Name:{' '}
              </Text>
              {fund.exchangeLocation.name}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Description:{' '}
              </Text>
              {fund.exchangeLocation.description}
            </ListItem>
          </List>
          <List>
            <Text>Type:</Text>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Name:{' '}
              </Text>
              {fund.type.name}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Description:{' '}
              </Text>
              {fund.type.description}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Fund:{' '}
              </Text>
              {fund.type.fund}
            </ListItem>
          </List>
          <List>
            <Text>Sector:</Text>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Name:{' '}
              </Text>
              {fund.sector.name}
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Description:{' '}
              </Text>
              {fund.sector.description}
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default Fund;

import React from 'react';
import {
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from '@chakra-ui/react';
import { HoldingModel } from '../models/holding';
import { DataModel } from '../models/data';

interface HoldingsTableProps {
  data: DataModel;
}

const HoldingsTable = ({ data }: HoldingsTableProps): JSX.Element => {
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Holdings</TableCaption>
        <Thead>
          <Tr>
            <Th>Financial Instrument Id</Th>
            <Th>ticker</Th>
            <Th>name</Th>
            <Th isNumeric>score</Th>
            <Th isNumeric>holdingPercentage</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.holdings &&
            data.holdings.length > 0 &&
            data.holdings.map((holding: HoldingModel, idx: number) => {
              return (
                <Tr key={holding.financialInstrumentId}>
                  <Td>{holding.financialInstrumentId}</Td>
                  <Td>{holding.ticker}</Td>
                  <Td>{holding.name}</Td>
                  <Td isNumeric>{holding.score}</Td>
                  <Td isNumeric>{holding.holdingPercentage}</Td>
                </Tr>
              );
            })}
        </Tbody>
        <Tfoot>
          {data && (
            <Tr>
              <Th isNumeric>holdingsAmount: {data.holdingsAmount}</Th>
              <Th isNumeric>currentPage: {data.currentPage}</Th>
              <Th isNumeric>totalPages: {data.totalPages}</Th>
              <Th isNumeric>totalHoldings: {data.totalHoldings}</Th>
            </Tr>
          )}
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default HoldingsTable;

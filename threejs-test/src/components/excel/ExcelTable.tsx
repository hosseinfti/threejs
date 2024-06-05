import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { eachExcelJsonType } from './ExcelUploadZone';
import { Box } from '@mui/system';
import { ButtonV2 } from 'datami-ui-kit';
import Icon from 'datami-font-icon';
import {
  ColorsSuccessLight,
  ColorsWarningLight,
  Spacing01,
  Spacing02,
  Spacing03,
  Spacing05,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import Body1 from '../elements/typography/Body1';
import Body2Bold from '../elements/typography/Body2Bold';
import translate from '../../utils/translate';
import ValidationMessage from '../ValidationMessage';

const ExcelTable = ({
  data,
  onDelete,
  id,
}: {
  data: eachExcelJsonType;
  onDelete: (id: string) => void;
  id: string;
}) => {
  // Function to generate Excel headers
  const generateExcelHeaders = (num) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = [];

    for (let i = 0; i < num; i++) {
      let columnName = '';
      let temp = i;

      while (temp >= 0) {
        columnName = letters[temp % 26] + columnName;
        temp = Math.floor(temp / 26) - 1;
      }

      result.push(columnName);
    }

    return result;
  };

  const StyledTableCell = styled(TableCell)(({ theme: any }) => ({
    [`&.${tableCellClasses.head}`]: {
      maxWidth: '5em',
      padding: '0',
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      maxWidth: '5em',
      padding: '0',
      // fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const number_of_iterate = 10;

  return (
    <Box>
      <Box
        dir={'rtl'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingInline: Spacing05,
          marginTop: Spacing03,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon name={'CSV'} />
          <Body2Bold sx={{ marginInline: Spacing01 }}>{data.name}</Body2Bold>
          <Body1 dir={'ltr'}>({data.size} kb)</Body1>
        </Box>
        <ButtonV2
          onClick={() => {
            onDelete(id);
          }}
          variant="text"
          color="error"
          label={translate('delete')}
        />
      </Box>
      {data?.data?.length > 0 && (
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                component="th"
                sx={{ width: '1em' }}
                className={'number_row_td'}
                key={'header'}
              />
              {generateExcelHeaders(number_of_iterate).map((header) => (
                <StyledTableCell
                  component="th"
                  sx={{ width: '5em' }}
                  className={'alphabet_header'}
                  key={header}
                >
                  {header}
                </StyledTableCell>
              ))}
            </TableRow>
            <TableRow>
              <StyledTableCell
                component="th"
                sx={{ width: '1em' }}
                className={'number_row_td'}
                key={'addasd'}
              >
                {0}
              </StyledTableCell>
              {generateExcelHeaders(number_of_iterate).map(
                (alphabet, index) => {
                  return (
                    <StyledTableCell
                      component="th"
                      sx={{ width: '5em', fontWeight: 'bold' }}
                      key={index}
                    >
                      {Object.keys(data.data[index])[index]}
                    </StyledTableCell>
                  );
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.slice(0, 10).map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell
                  className={'number_row_td'}
                  component="td"
                  sx={{ width: '1em' }}
                  key={`${row.id + index}`}
                >
                  {index + 1}
                </StyledTableCell>
                {generateExcelHeaders(number_of_iterate).map(
                  (alphabet, _index) => {
                    return (
                      <StyledTableCell
                        component="td"
                        sx={{ width: '5em' }}
                        key={`${alphabet + _index}`}
                      >
                        {
                          data.data[index][
                            Object.keys(data.data[_index])[_index]
                          ]
                        }
                      </StyledTableCell>
                    );
                  }
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <ValidationMessage
        messages={data.messages.map((message) => {
          return {
            id: message.id,
            text: message?.field
              ? translate(message.text, { item: message.field })
              : translate(message.text),
            type: message.type,
          };
        })}
      />
    </Box>
  );
};

export default ExcelTable;

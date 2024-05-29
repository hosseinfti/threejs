import React, { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { borderColor, padding, width } from '@mui/system';
import { Box, Divider, Typography } from '@mui/material';
import fa from '../assets/texts/fa.json';
import Icon from 'datami-font-icon';
import {
  TypographyTypographyH4FontSize,
  TypographyTypographyBody2FontSize,
  TypographyTypographyBody2TextDecoration,
  TypographyTypographyBody2FontFamily,
  TypographyTypographyBody2FontWeight,
  TypographyTypographyBody2FontStyle,
  TypographyTypographyBody2FontStretch,
  TypographyTypographyBody2LetterSpacing,
  TypographyTypographyBody2LineHeight,
  TypographyTypographyBody2ParagraphIndent,
  TypographyTypographyBody2ParagraphSpacing,
  TypographyTypographyBody2TextCase,
  Spacing02,
  SecondaryDivider,
  Radius04,
  Spacing05,
  ColorsGrey200,
  ColorsGrey700,
  ColorsGrey100,
  ColorsGrey50,
  ColorsGreyWhite,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import { ButtonV2 } from 'datami-ui-kit';
import Body2 from './elements/typography/Body2';
import ExcelTable from './elements/ExcelTable';
import ExcelUploadZone, { eachExcelJsonType } from './elements/ExcelUploadZone';

// Function to generate Excel headers

const ExcelUpload = () => {
  const [data, setData] = useState<Array<eachExcelJsonType>>([]);

  // const iterate = ()=>{
  //     let row = []
  //     for(let i=0; i<number_of_iterate; i++){
  //
  //     }
  // }
  // useEffect(() => {
  //     // console.log(data)
  // }, [data]);

  const handleExcelUploaded = (jsonData: eachExcelJsonType) => {
    let _tempData: eachExcelJsonType[] = [...data];
    _tempData.push(jsonData);
    setData(_tempData);
  };

  return (
    <Box className={'upload_container'} sx={{ width: '100%', height: '100%' }}>
      <ExcelUploadZone
        mode={data?.length > 0 ? 'add' : 'select'}
        onUploadExcel={handleExcelUploaded}
        requiredColumns={['source', 'target', 'id', 'label']}
      />
      {data.length > 0 && (
        <Box
          sx={{
            height: '65%',
            width: '100%',
            border: '1px solid',
            borderRadius: Radius04,
            borderColor: ColorsGrey200,
          }}
        >
          <Box
            className={'table_container'}
            dir={'ltr'}
            sx={{
              height: '100%',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '1px',
              },
              /* Track */
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              /* Handle */
              '&::-webkit-scrollbar-thumb': {
                background: '#d2d2d2',
              },
              /* Handle on hover */
              '&::-webkit-scrollbar-thumb:hover': {
                background: '#8d959c',
              },
              /* Handle scroll track height */
              '&::-webkit-scrollbar-track-piece:end': {
                background: 'transparent',
                marginBottom: Spacing05,
              },
              /* Handle scroll track height */
              '&::-webkit-scrollbar-track-piece:start': {
                background: 'transparent',
                marginTop: Spacing05,
              },
            }}
          >
            {data.map((json, index) => {
              return (
                <>
                  <ExcelTable data={json} />
                  {index < data.length - 1 && (
                    <Divider color={ColorsGreyWhite} />
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExcelUpload;

import React, { useState } from 'react';
import { Box, Divider } from '@mui/material';

import {
  Radius04,
  Spacing05,
  ColorsGrey200,
  ColorsGreyWhite,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import ExcelTable from './ExcelTable';
import ExcelUploadZone, { eachExcelJsonType } from './ExcelUploadZone';

const ExcelUpload = () => {
  const [data, setData] = useState<Array<eachExcelJsonType>>([]);

  const handleExcelUploaded = (jsonData: eachExcelJsonType) => {
    let _tempData: eachExcelJsonType[] = [...data];
    _tempData.push(jsonData);
    setData(_tempData);
  };

  const handleDeleteUploadedExcel = (id: string) => {
    let tempData: eachExcelJsonType[] = [...data];
    const removedIndex = tempData.findIndex((_data) => _data.id === id);
    tempData.splice(removedIndex, 1);
    setData([...tempData]);
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
                <Box key={`${index + '_' + new Date().valueOf()}`}>
                  <ExcelTable
                    id={json.id}
                    data={json}
                    onDelete={handleDeleteUploadedExcel}
                  />
                  {index < data.length - 1 && (
                    <Divider color={ColorsGreyWhite} />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExcelUpload;

import React, { useRef } from 'react';
import {
  Radius04,
  SecondaryDivider,
  Spacing01,
  Spacing04,
  Spacing05,
  TypographyTypographyH4FontSize,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import Icon from 'datami-font-icon';
import Body2 from './typography/Body2';
import { ButtonV2 } from 'datami-ui-kit';
import { Box, SxProps } from '@mui/material';
import * as XLSX from 'xlsx';
import Body3Bold from './typography/Body3Bold';
import Body1 from './typography/Body1';
import translate from '../../utils/translate';

export type excelJsonDataType = { [key: string]: string };
type excelJsonMessageType = {
  type: 'error' | 'success';
  text: string;
  field?: string;
};
export type eachExcelJsonType = {
  name: string;
  size: string;
  messages: excelJsonMessageType[];
  data: excelJsonDataType[];
};
const ExcelUploadZone = ({
  sx,
  onUploadExcel,
  mode,
  requiredColumns,
}: {
  sx: SxProps;
  onUploadExcel: (jsonData: eachExcelJsonType) => void;
  mode: 'select' | 'add';
  requiredColumns: string[];
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: any) => {
    const file = event?.target?.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 1,
      });

      const sheet = workbook.Sheets[sheetName];
      const fileSize = (file.size / 1024).toFixed(2);
      const messages: excelJsonMessageType[] = [];
      const validateColumns = (worksheet) => {
        const columns = worksheet[0]; // Get the header row
        console.log(columns, requiredColumns);
        requiredColumns.forEach((requiredColumn, index) => {
          columns.findIndex((column) => column === requiredColumn) === -1
            ? messages.push({
                type: 'error',
                text: `the_selected_file_has_not_the_${requiredColumn}_column`,
                field: requiredColumn,
              })
            : messages.push({
                type: 'success',
                text: `file.selected_is_a_valid_file`,
              });
        });
        console.log(messages);

        // if (!columns.includes('name') || !columns.includes('id')) {
        //   setError('The Excel file must contain "name" and "id" columns.');
        // } else {
        //   setError(null); // Reset the error if columns are present
        // }
      };
      validateColumns(worksheet);

      const jsonData: excelJsonDataType[] = XLSX.utils.sheet_to_json(sheet);
      onUploadExcel({
        name: file.name,
        size: fileSize,
        messages: messages,
        data: jsonData,
      });
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <input
        style={{ display: 'none' }}
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        ref={inputRef}
      />
      {mode === 'select' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderColor: SecondaryDivider,
            borderRadius: Radius04,
            padding: Spacing05,
            ...sx,
          }}
        >
          <Icon
            name="upload"
            style={{ fontSize: TypographyTypographyH4FontSize }}
          />
          <Body2>{translate('upload_text')}</Body2>
          <ButtonV2
            onClick={() => {
              if (inputRef?.current?.click) {
                inputRef.current.click();
              }
            }}
            variant="text"
            color="primary"
            label={translate('select_file')}
          />
        </Box>
      )}
      {mode === 'add' && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: `${Spacing04} 0 ${Spacing04} 0`,
            ...sx,
          }}
        >
          <Box>
            <Body3Bold sx={{ marginBottom: Spacing01 }}>
              {translate('selected_files_display')}
            </Body3Bold>
            <Body1> {translate('first_ten_lines_excel_description')} </Body1>
          </Box>
          <ButtonV2
            onClick={() => {
              if (inputRef?.current?.click) {
                inputRef.current.click();
              }
            }}
            variant="text"
            color="primary"
            label={translate('add_file')}
            label={translate('add_file')}
            startIcon={<Icon name={'add'} />}
          />
        </Box>
      )}
    </>
  );
};

export default ExcelUploadZone;

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
import Body2 from '../elements/typography/Body2';
import { ButtonV2 } from 'datami-ui-kit';
import { Box, SxProps } from '@mui/material';
import * as XLSX from 'xlsx';
import Body3Bold from '../elements/typography/Body3Bold';
import Body1 from '../elements/typography/Body1';
import translate from '../../utils/translate';

export type excelJsonDataType = { [key: string]: string };
type excelJsonMessageType = {
  id: string;
  type: 'error' | 'success';
  text: string;
  field?: string;
};
export type eachExcelJsonType = {
  id: string;
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
    const file = event?.target?.files && event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const messages: excelJsonMessageType[] = [];
      try {
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];

        const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });

        const sheet = workbook.Sheets[sheetName];
        const fileSize = (file.size / 1024).toFixed(2);

        const validateColumns = (worksheet) => {
          //Check the required columns exist
          {
            const columns = worksheet[0]; // Get the header row
            const hasRequiredColumns = [];
            requiredColumns.forEach((requiredColumn, index) => {
              const hasRequiredColumn = columns.findIndex(
                (column) => column === requiredColumn
              );
              if (hasRequiredColumn < 0) {
                messages.push({
                  id: `${index}_error_message_${
                    file.name
                  }_${new Date().valueOf()}`,
                  type: 'error',
                  text: `the_selected_file_has_not_the_required_column`,
                  field: requiredColumn,
                });
              } else {
                hasRequiredColumns.push(true);
              }
            });

            const hasAllRequiredColumns =
              hasRequiredColumns?.length === requiredColumns?.length;

            if (hasAllRequiredColumns) {
              messages.push({
                id: `0_${file.name}_${new Date().valueOf()}`,
                type: 'success',
                text: `the_selected_file_is_a_valid_file`,
                field: file.name,
              });
            }
          }
        };
        validateColumns(worksheet);

        const jsonData: excelJsonDataType[] = XLSX.utils.sheet_to_json(sheet);
        onUploadExcel({
          id: `${file.name + '_' + new Date().valueOf()}`,
          name: file.name,
          size: fileSize,
          messages: messages,
          data: jsonData,
        });
      } catch (_e) {
        messages.push({
          id: `0_error_message_${file.name}_${new Date().valueOf()}`,
          type: 'error',
          text: `the_selected_file_is_not_a_valid_file`,
          field: file.name,
        });
        onUploadExcel({
          id: `${file.name + '_' + new Date().valueOf()}`,
          name: file.name,
          size: '0',
          messages: messages,
          data: [],
        });
      }
    };
    reader.readAsBinaryString(file);
    inputRef.current.value = null;
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

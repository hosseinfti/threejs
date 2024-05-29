import React from 'react';
import { Box, SxProps } from '@mui/material';
import {
  ColorsBackgroundSecondaryBckground,
  Spacing08,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';

export interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FunctionComponent<ContentProps> = (
  props: ContentProps
) => {
  return (
    <Box
      className="layout-content"
      sx={{
        flex: 3,
        backgroundColor: ColorsBackgroundSecondaryBckground,
        paddingInline: Spacing08,
        marginTop: '3.5em',
        height: '100%',
        maxWidth: '100%',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Content;

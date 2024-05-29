import React from 'react';
import { SxProps, Typography } from '@mui/material';
import {
  TypographyTypographyBody3BoldFontSize,
  TypographyTypographyBody3BoldTextDecoration,
  TypographyTypographyBody3BoldFontWeight,
  TypographyTypographyBody3BoldFontStyle,
  TypographyTypographyBody3BoldFontStretch,
  TypographyTypographyBody3BoldLetterSpacing,
  ColorsGrey700,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';

const Body3Bold = ({
  sx,
  children,
  props,
}: {
  sx?: SxProps;
  children: string;
}) => {
  return (
    <Typography
      sx={{
        fontSize: TypographyTypographyBody3BoldFontSize,
        textDecoration: TypographyTypographyBody3BoldTextDecoration,
        // fontFamily: TypographyTypographyBody3BoldFontFamily,
        fontWeight: TypographyTypographyBody3BoldFontWeight,
        fontStyle: TypographyTypographyBody3BoldFontStyle,
        fontStretch: TypographyTypographyBody3BoldFontStretch,
        letterSpacing: TypographyTypographyBody3BoldLetterSpacing,
        // lineHeight: TypographyTypographyBody3BoldLineHeight,
        //   paragraphIndent: TypographyTypographyBody3BoldParagraphIndent,
        //   paragraphSpacing: TypographyTypographyBody3BoldParagraphSpacing,
        //   textCase: TypographyTypographyBody3BoldTextCase,
        color: ColorsGrey700,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Body3Bold;

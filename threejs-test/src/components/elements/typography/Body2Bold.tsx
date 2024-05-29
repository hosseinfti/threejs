import React from 'react';
import { SxProps, Typography } from '@mui/material';
import {
  TypographyTypographyBody2BoldFontSize,
  TypographyTypographyBody2BoldTextDecoration,
  TypographyTypographyBody2BoldFontWeight,
  TypographyTypographyBody2BoldFontStyle,
  TypographyTypographyBody2BoldFontStretch,
  TypographyTypographyBody2BoldLetterSpacing,
  ColorsGrey700,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';

const Body2Bold = ({
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
        fontSize: TypographyTypographyBody2BoldFontSize,
        textDecoration: TypographyTypographyBody2BoldTextDecoration,
        // fontFamily: TypographyTypographyBody2BoldFontFamily,
        fontWeight: TypographyTypographyBody2BoldFontWeight,
        fontStyle: TypographyTypographyBody2BoldFontStyle,
        fontStretch: TypographyTypographyBody2BoldFontStretch,
        letterSpacing: TypographyTypographyBody2BoldLetterSpacing,
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

export default Body2Bold;

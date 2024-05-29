import React from 'react';
import {
  ColorsTextSecondary,
  TypographyTypographyBody1FontSize,
  TypographyTypographyBody1TextDecoration,
  TypographyTypographyBody1FontWeight,
  TypographyTypographyBody1FontStyle,
  TypographyTypographyBody1FontStretch,
  TypographyTypographyBody1LetterSpacing,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import { SxProps, Typography } from '@mui/material';

const Body1 = ({
  sx = {},
  children,
  ...props
}: {
  sx?: SxProps;
  children: string;
}) => {
  return (
    <Typography
      sx={{
        fontSize: TypographyTypographyBody1FontSize,
        textDecoration: TypographyTypographyBody1TextDecoration,
        // fontFamily: TypographyTypographyBody1FontFamily,
        fontWeight: TypographyTypographyBody1FontWeight,
        fontStyle: TypographyTypographyBody1FontStyle,
        fontStretch: TypographyTypographyBody1FontStretch,
        letterSpacing: TypographyTypographyBody1LetterSpacing,
        // lineHeight: TypographyTypographyBody1LineHeight,
        //   paragraphIndent: TypographyTypographyBody1ParagraphIndent,
        //   paragraphSpacing: TypographyTypographyBody1ParagraphSpacing,
        //   textCase: TypographyTypographyBody1TextCase,
        color: ColorsTextSecondary,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Body1;

import React, {ReactElement} from 'react';
import { Box, Typography } from '@mui/material';
import {
  TypographyTypographyH5BoldFontSize,
  TypographyTypographyH5BoldTextDecoration,
  TypographyTypographyH5BoldFontFamily,
  TypographyTypographyH5BoldFontWeight,
  TypographyTypographyH5BoldFontStyle,
  TypographyTypographyH5BoldFontStretch,
  TypographyTypographyH5BoldLetterSpacing,
  TypographyTypographyH5BoldLineHeight,
  TypographyTypographyH5BoldParagraphIndent,
  TypographyTypographyH5BoldParagraphSpacing,
  TypographyTypographyH5BoldTextCase,
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
  ColorsTextSecondary,
  ColorsTextPrimary,
  Spacing03,
  Spacing01,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

interface props {
  title?: string;
  description?: string | ReactElement;
  bullets?: string[] | ReactElement[];
}

const TitleDescription = ({ title, description, bullets }: props) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {title && (
        <Typography
            component={"TypographyH5Bold"}
          sx={{
            fontSize: TypographyTypographyH5BoldFontSize,
            textDecoration: TypographyTypographyH5BoldTextDecoration,
            // fontFamily: TypographyTypographyH5BoldFontFamily,
            fontWeight: TypographyTypographyH5BoldFontWeight,
            fontStyle: TypographyTypographyH5BoldFontStyle,
            fontStretch: TypographyTypographyH5BoldFontStretch,
            letterSpacing: TypographyTypographyH5BoldLetterSpacing,
            // lineHeight: TypographyTypographyH5BoldLineHeight,
            paragraphIndent: TypographyTypographyH5BoldParagraphIndent,
            paragraphSpacing: TypographyTypographyH5BoldParagraphSpacing,
            textCase: TypographyTypographyH5BoldTextCase,
            color: ColorsTextPrimary,
            marginBottom: Spacing01,
          }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          sx={{
            fontSize: TypographyTypographyBody2FontSize,
            textDecoration: TypographyTypographyBody2TextDecoration,
            // fontFamily: TypographyTypographyBody2FontFamily,
            fontWeight: TypographyTypographyBody2FontWeight,
            fontStyle: TypographyTypographyBody2FontStyle,
            fontStretch: TypographyTypographyBody2FontStretch,
            letterSpacing: TypographyTypographyBody2LetterSpacing,
            // lineHeight: TypographyTypographyBody2LineHeight,
            //   paragraphIndent: TypographyTypographyBody2ParagraphIndent,
            //   paragraphSpacing: TypographyTypographyBody2ParagraphSpacing,
            //   textCase: TypographyTypographyBody2TextCase,
            color: ColorsTextSecondary,
          }}
        >
          {description}
        </Typography>
      )}
      <ul style={{ marginTop: Spacing03 }}>
        {bullets &&
          bullets?.length > 0 &&
          bullets.map((bullet) => {
            return (
              <li>
                <Typography
                  sx={{
                    fontSize: TypographyTypographyBody2FontSize,
                    textDecoration: TypographyTypographyBody2TextDecoration,
                    // fontFamily: TypographyTypographyBody2FontFamily,
                    fontWeight: TypographyTypographyBody2FontWeight,
                    fontStyle: TypographyTypographyBody2FontStyle,
                    fontStretch: TypographyTypographyBody2FontStretch,
                    letterSpacing: TypographyTypographyBody2LetterSpacing,
                    //   lineHeight: TypographyTypographyBody2LineHeight,
                    //   paragraphIndent: TypographyTypographyBody2ParagraphIndent,
                    //   paragraphSpacing: TypographyTypographyBody2ParagraphSpacing,
                    //   textCase: TypographyTypographyBody2TextCase,
                    color: ColorsTextSecondary,
                  }}
                >
                  {bullet}
                </Typography>
              </li>
            );
          })}
      </ul>
    </Box>
  );
};

export default TitleDescription;

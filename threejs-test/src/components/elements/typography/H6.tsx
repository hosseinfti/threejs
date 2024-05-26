import React from 'react';
import {SxProps, Typography} from "@mui/material";
import {
    ColorsTextPrimary, Spacing01,
    TypographyTypographyH5BoldFontSize,
    TypographyTypographyH5BoldFontStretch,
    TypographyTypographyH5BoldFontStyle,
    TypographyTypographyH5BoldFontWeight,
    TypographyTypographyH5BoldLetterSpacing,
    TypographyTypographyH5BoldParagraphIndent,
    TypographyTypographyH5BoldParagraphSpacing,
    TypographyTypographyH5BoldTextCase,
    TypographyTypographyH5BoldTextDecoration
} from "datami-ui-kit/dist/esm/style-dictionary-dist/tokens";

const H6 = ({sx, children}: { sx: SxProps, children: string }) => {
    return (
        <Typography sx={{
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
            ...sx
        }}>
            {children}
        </Typography>
    );
};

export default H6;

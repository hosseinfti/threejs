import React from 'react';
import {
    ColorsTextSecondary,
    TypographyTypographyBody2FontSize,
    TypographyTypographyBody2FontStretch,
    TypographyTypographyBody2FontStyle,
    TypographyTypographyBody2FontWeight, TypographyTypographyBody2LetterSpacing,
    TypographyTypographyBody2TextDecoration
} from "datami-ui-kit/dist/esm/style-dictionary-dist/tokens";
import {SxProps, Typography} from "@mui/material";

const Body2 = ({sx, children}: { sx: SxProps, children: string }) => {
    return (
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
                ...sx
            }}
        >
            {children}
        </Typography>
    );
};

export default Body2;

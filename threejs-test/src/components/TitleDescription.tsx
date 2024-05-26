import React, {ReactElement} from 'react';
import {Box, Typography} from '@mui/material';
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
import H6 from "./elements/typography/H6";
import Body2 from "./elements/typography/Body2";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

interface props {
    title?: string | ReactElement;
    description?: string | ReactElement;
    bullets?: string[] | ReactElement[];
}

const TitleDescription = ({title, description, bullets}: props) => {
    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            {title && typeof title === 'string' ? (
                <H6>
                    {title}
                </H6>
            ) : title}
            {description && typeof description === "string" ? (
                <Body2
                >
                    {description}
                </Body2>
            ) : description}
            <ul style={{marginTop: Spacing03}}>
                {bullets &&
                bullets?.length > 0 &&
                bullets.map((bullet) => {
                    return (
                        <li>
                            <Body2>
                                {bullet}
                            </Body2>
                        </li>
                    );
                })}
            </ul>
        </Box>
    );
};

export default TitleDescription;

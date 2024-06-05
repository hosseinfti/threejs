import React from 'react';
import {
  ColorsSuccessLight,
  ColorsWarningLight,
  Spacing02,
  Spacing05,
} from 'datami-ui-kit/dist/esm/style-dictionary-dist/tokens';
import { Box } from '@mui/system';
import Icon from 'datami-font-icon';
import Body1 from './elements/typography/Body1';

interface propsType {
  messages: { text: string; type: 'success' | 'error'; id: string }[];
}

const ValidationMessage = ({ messages }: propsType) => {
  const iconSelector = (type) => {
    switch (type) {
      case 'success':
        return (
          <Icon
            name={'check'}
            style={{
              marginInlineEnd: Spacing02,
              color: ColorsSuccessLight,
            }}
          />
        );
        break;
      case 'error':
        return (
          <Icon
            name={'error'}
            style={{
              marginInlineEnd: Spacing02,
              color: ColorsWarningLight,
            }}
          />
        );
        break;
      default:
        return <div />;
    }
  };

  return (
    <Box sx={{ paddingInline: Spacing05 }}>
      {messages.map((message, index) => {
        return (
          <Box
            key={`${message.id + '_' + new Date().valueOf() * index + 1}`}
            dir={'rtl'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {iconSelector(message.type)}
            <Body1
              sx={{
                color:
                  message.type === 'success'
                    ? ColorsSuccessLight
                    : ColorsWarningLight,
              }}
            >
              {message.text}
            </Body1>
          </Box>
        );
      })}
    </Box>
  );
};

export default ValidationMessage;

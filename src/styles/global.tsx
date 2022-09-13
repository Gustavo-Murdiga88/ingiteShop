import { globalCss} from '.';

import {createStitches} from '@stitches/react'

export const globalStyled = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    body:{
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100'
    },
    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400
      }
})
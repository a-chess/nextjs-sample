import { style } from '@vanilla-extract/css';

export const fontSize = {
    Caption2: style({
    fontWeight: 400,
    fontSize: '0.675rem',
    lineHeight: '150%',
  }),
  Caption2Bold: style({
    fontWeight: 700,
    fontSize: '0.675rem',
    lineHeight: '150%',
  }),
  Caption: style({
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '150%',
  }),
  CaptionBold: style({
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '150%',
  }),
  SubText: style({
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '150%',
  }),
  SubTextBold: style({
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '150%',
  }),
  Headline: style({
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '150%',
  }),
  Headline2: style({
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '150%',
  }),
  Headline3: style({
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '150%',
  }),
  Body: style({
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '150%',
  }),
  BodyLarge: style({
    fontWeight: 400,
    fontSize: '1.25rem',
    lineHeight: '150%',
  }),
  Title: style({
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '125%',
  }),
  Title1: style({
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: '125%'
}),
}


export type FontSizeKeys = keyof typeof fontSize
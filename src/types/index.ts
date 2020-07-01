import { theme } from '../styles/theme';

export type ThemeType = typeof theme;

export type FillActionType<T> = (
  payload: T,
) => {
  type: string;
  payload: T;
};

export type ErrorActionType = (
  payload: string,
) => {
  type: string;
  error: true;
  payload: string;
};

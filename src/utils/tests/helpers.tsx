/* eslint-disable prettier/prettier */
import {  ThemeProvider } from 'styled-components'
import {  render,  RenderResult } from '@testing-library/react'

import {darken, light} from 'styles/themes'
import React from 'react'
 const n = true
 const t = n ? light : darken
export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={t}>{children}</ThemeProvider>)

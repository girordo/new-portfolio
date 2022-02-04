import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }

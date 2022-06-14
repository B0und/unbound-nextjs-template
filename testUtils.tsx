import { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { AllProviders } from "./src/utils/providers"

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }

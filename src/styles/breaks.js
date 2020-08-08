import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config.js"

const {
  theme: { screens },
} = resolveConfig(tailwindConfig)

Object.entries(screens).forEach(([key, value]) => {
  screens[key] = `@media (min-width: ${value})`
})

export { screens as mq }

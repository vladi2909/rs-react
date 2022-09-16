import { forwardRef } from "react"

export const Input = forwardRef((props, ref) => {
  return <input inputRef={ref} {...props} />
});
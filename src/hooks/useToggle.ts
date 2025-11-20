import { useState } from "react"

/** 
 * A custom hook to manage a boolean toggle state.
 * 
 * toggle() -> flips the state
 * open() -> sets the state to true
 * close() -> sets the state to false
 * 
 * @param initial - The initial boolean value (default is false).
 * @returns An object containing the current value and functions to toggle, open, and close the state.
 */

export function useToggle(initial: boolean = false) {
  const [value, setValue] = useState(initial)

  const toggle = () => setValue((prev) => !prev)
  const open = () => setValue(true)
  const close = () => setValue(false)
  return { value, toggle, open, close }
}

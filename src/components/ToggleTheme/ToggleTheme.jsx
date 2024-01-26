import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { useContext } from "react"
import Switch from "react-switch"

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <Switch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  )
}

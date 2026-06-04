import "./App.css"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import { Routing } from "@/app/routes"
import { useAppSelector } from "@/app/hooks/useSelectorType.ts"
import { selectedThemeMode } from "@/app/app-slice/app-slice.ts"
import s from "@/widgets/Header/Header.module.css"
import { useEffect } from "react"

function App() {
  const themeMode = useAppSelector(selectedThemeMode)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeMode)
  }, [themeMode])

  return (
    <div className={"container"}>
      <Header />
      <div className={s.routing}>
        <Routing />
      </div>
      <Footer />
    </div>
  )
}

export default App

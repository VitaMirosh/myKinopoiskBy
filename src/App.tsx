
import './App.css'
import {Header} from '@/widgets/Header';
import {Footer} from '@/widgets/Footer';
import {Routing} from '@/app/routes';
import {useAppSelector} from '@/app/hooks/useSelectorType.ts';
import {selectedThemeMode} from '@/app/app-slice/app-slice.ts';
import clsx from 'clsx';
import s from '@/widgets/Header/Header.module.css';

function App() {

  const themeMode = useAppSelector(selectedThemeMode)

  return (
<div className={clsx('container', s[themeMode])}>
  <Header/>
  <Routing/>
  <Footer/>
</div>

  )
}

export default App

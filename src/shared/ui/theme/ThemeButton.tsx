import {useAppDispatch} from '@/app/hooks/useDispatchType.ts';
import {changeThemeModeAC, selectedThemeMode} from '@/app/app-slice/app-slice.ts';
import {useAppSelector} from '@/app/hooks/useSelectorType.ts';
import s from './Theme.module.css'
import moon from '../../../assets/img/moon.svg'
import sun from '../../../assets/img/sun.svg'
import {Btn} from '@/shared/ui/Btn';

export const ThemeButton = () => {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector(selectedThemeMode)
  const changeHandlerMode = () => {
    dispatch(changeThemeModeAC({themeMode:themeMode === 'light' ? 'dark' : 'light'}));
  }

  return (
    <>
      <Btn className={s.btn} onClick={changeHandlerMode}><img src={ themeMode === 'light' ? sun: moon}/></Btn>
    </>
  )
}
import {NavigateFunction} from 'react-router-dom'

export function navigateTo(navigate: NavigateFunction, path: string) {
    navigate(path)
}
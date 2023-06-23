import { ReactNode } from 'react';
import style from './style.module.scss';

interface ButtonProps {
    children?:ReactNode;
}

export default function ButtonNav({children}:ButtonProps) {

    return (
        <button className={`${style.button} ${ style.searchButton}`}>
            {children}
        </button>
    )
}
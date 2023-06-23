import Image from 'next/image'
import styles from './page.module.css'
import Button from '../components/Button'
import style from '../app/style.module.scss'
import Logo from 'public/assets/logo.png'
import { httpClient } from '@/app/services/api/rota'
import { Link } from "lucide-react"

interface Book {
  id: number,
  title: string,
  image: string,
  author: string,
  
}

export default function Home() {
  const { data } = await httpClient.get<Book[]>('/books')
  
  return (
    <main className={style.main}>
        <div className={style.Livros}>
            <h1>Encontre as melhores indicações de livros</h1>
            <div className={style.section}>
                {data.map (book => 
                <Link key={book.id} href={'/book/${book.id}'}>
                    <Image src={book.image} width={128} height={206} alt={'Capa do Livro ${book.title}'}/>
                </Link>
                )}
            </div>
        </div>
    </main>
)
}

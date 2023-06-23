import Image from 'next/image'
import style from './style.module.scss'
import Logo from 'public/assets/logo.png'
import ButtonLogin from '@/components/ButtonLogin'

export default function Login() {
  return (
    <main className={style.main}>
      <div className={style.titulo}>
        <h1>Compartilhe suas dicas de leitura com seus amigos</h1>
        <Image src={Logo} width={220} height={220} alt="logo" />
      </div>

      <div className={style.campo}>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <ButtonLogin >Entrar</ButtonLogin>
        <a href='#'>Esqueceu a senha?</a>
        <ButtonLogin>Criar nova conta</ButtonLogin>
      </div>

    </main>
  )
}
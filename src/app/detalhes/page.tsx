import ButtonDetalhes from "@/components/ButtonDetalhes"
import style from "./style.module.scss"
import Image from "next/image"
import Logo from 'public/assets/logo.png'

export default function Detalhes() {
    return (
        <main className={style.main}>
            <div className={style.secaoLivros}>
                <div className={style.section}>
                    <Image src={Logo} width={190} height={190} alt="logo" />
                    <h4>Título do livro</h4>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <h5 className={style.autor}>Fulano de Tal</h5>
                    <a href="#"><ButtonDetalhes>Adicionar à biblioteca</ButtonDetalhes></a>
                </div>
                <div className={style.informacoes}>
                    <h1>Título do livro</h1>
                    <p>93 avaliações</p>
                    <div className={style.publicado}>
                        <p>Irlan Moreira</p>
                        <p>8 Jan 21</p>
                    </div>
                    <p className={style.resumo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis a augue sit amet auctor. Integer eget gravida nibh, vel feugiat nibh. Aenean malesuada, mi non maximus bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit amet ex vel, lobortis varius sapien. Phasellus in tristique felis. Phasellus blandit augue.</p>
                    <div className={style.comentarios}>
                        <p>Comentários</p>
                    </div>
                </div>
                
            </div>


        </main>

    )

}

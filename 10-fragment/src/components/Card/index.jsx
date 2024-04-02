import styles from "./styles.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="poster-star-wars" />
            <div>
                <h2 className={styles.titulo}>Poster do Filme Star Wars</h2>
                <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className={styles.btnComprar}>Comprar agora</button>
            </div>
        </div>
    )

}
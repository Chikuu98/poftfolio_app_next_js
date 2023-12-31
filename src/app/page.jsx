import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your Digital Products</h1>
        <p className={styles.desc}>
          Turning your Idea into reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} width={480} height={480} alt="" className={styles.img}/>
      </div>
    </div>
  )
}

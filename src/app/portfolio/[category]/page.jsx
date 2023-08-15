import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Create Next Applications</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio incidunt ipsum praesentium, mollitia ducimus dolor totam at qui quisquam aut molestias nostrum tenetur. Consequuntur dolorum quidem laboriosam hic illum officia.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/category1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get Start with Adobe</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugit quasi repudiandae cupiditate doloremque impedit nesciunt odio esse ea, possimus laboriosam vitae neque pariatur placeat, illum sequi. Quia, reiciendis fugiat.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="/category1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category
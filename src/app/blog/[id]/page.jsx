import React from 'react'
import styles from './page.module.css'
import blog1 from '../../../../public/blog1.jpg';
import Image from 'next/image';


const BlogPost = () => {
  return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>test title</h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, eum id asperiores inventore ratione modi. Perspiciatis quia in fugiat mollitia aliquam a vitae, laboriosam nobis incidunt et voluptatum illo quos?
            </p>
            <div className={styles.author}>
              <Image
                src={blog1}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>test user</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={blog1}
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo, cupiditate eius laboriosam perferendis blanditiis, itaque fuga ea inventore consectetur architecto neque alias veritatis veniam. Illo a doloribus repudiandae culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde tempora saepe fugiat commodi, recusandae incidunt itaque obcaecati velit, nemo fugit accusamus dignissimos. Facilis vero consequuntur nostrum distinctio laudantium quas?
          </p>
        </div>
      </div>
  )
}

export default BlogPost
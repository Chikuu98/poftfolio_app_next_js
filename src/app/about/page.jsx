import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import Whale from '../../../public/whale.png';
import Button from "@/components/button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src={Whale}
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h2 className={styles.imgTitle}>Digital Storytellers</h2>
                    <h3 className={styles.imgDescription}>Handcrafting awards winning digital experiences</h3>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h2 className={styles.title}>Who are we?</h2>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat repellendus labore sint consequuntur esse,
                        minima soluta deserunt, adipisci illum perspiciatis a ullam,
                        ipsam optio. Doloremque magnam repudiandae repellendus voluptate?
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam consectetur debitis quis qui possimus non repellendus modi sapiente
                        earum hic voluptatem quibusdam nesciunt quas temporibus,
                        inventore at labore tempore minima?
                    </p>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>What we do?</h2>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto fugiat repellendus labore sint consequuntur esse,
                        minima soluta deserunt, adipisci illum perspiciatis a ullam,
                        ipsam optio. Doloremque magnam repudiandae repellendus voluptate?
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam consectetur debitis quis qui possimus non repellendus modi sapiente
                        earum hic 
                        voluptatem quibusdam
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About
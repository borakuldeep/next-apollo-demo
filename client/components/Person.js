import Image from "next/image";
import styles from "../styles/Person.module.css";

const Component = ({ person }) => {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.firstinfo}>
          <Image
            src="/images/lego.jpg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <div className={styles.profileinfo}>
            <h2>{person?.name}</h2>
            <small>
              <b>Email: </b> {person?.email}
            </small>
            <small>
              <b>Phone: </b> {person?.phone}
            </small>
            <small>
               <sub><b>Address: </b>{`${person?.address?.street}, ${person?.address?.city}, ${person?.address?.country}`}</sub>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;

import Image from "next/image";
import { IUser } from "../types";
import styles from "../styles/Users.module.css";

type CardProps = {
  userInfo: IUser;
};

const UserCard = ({ userInfo } : CardProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.firstinfo}>
          <Image
            src="/images/lego.jpg"
            alt="Picture of the user"
            width={100}
            height={100}
          />
          <div className={styles.profileinfo}>
            <h3>{userInfo?.name}</h3>
            <small>
              <b>Email: </b> {userInfo?.email}
            </small>
            <div>
              <b>Phone: </b> {userInfo?.phone}
            </div>
            <div>
              <sub>
                <b>Address: </b>
                {`${userInfo?.address?.street}, ${userInfo?.address?.city}, ${userInfo?.address?.country}`}
              </sub>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

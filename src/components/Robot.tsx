import { FC } from 'react';
import styles from 'components/Robot.module.css';

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: FC<RobotProps> = ({ id, name, email }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Robot;

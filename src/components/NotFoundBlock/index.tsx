import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>ERROR 404</span>
        <br />
        Ничего не найдено
        <h1 className={styles.description}>
          К сожалению данная страница отсутствует
        </h1>
      </h1>
    </div>
  );
};

export default NotFoundBlock;

import { Level } from "../../helpers/imc";
import styles from "./Grid.module.css";
type Props = {
  data: Level;
};

export const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.girdIcon}>
        <img
          src={data.icon === "up" ? "assets/up.png" : "assets/down.png"}
          width="30"
        />
      </div>
      <div className={styles.girdTitle}>{data.title}</div>
      {data.yourImc && <div>Seu Imc é de {data.yourImc}</div>}
      <div className={styles.girdInfo}>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e{" "}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};

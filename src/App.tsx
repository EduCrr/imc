import { useState } from "react";
import styles from "./App.module.css";
import { levels, calulateImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";
const App = () => {
  const [heightValue, setHeightValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculate = () => {
    if (heightValue && weightValue) {
      setShowItem(calulateImc(heightValue, weightValue));
    } else {
      alert("Campo vazio");
    }
  };
  const handleClose = () => {
    setShowItem(null);
    setHeightValue(0);
    setWeightValue(0);
  };
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src="assets/powered.png" alt="" width={200} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Calcule IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corporal,que é um cálculo que
            serve para avaliar se a pessoa está dentro do seu peso ideal em
            relação à altura.
          </p>
          <input
            type="number"
            placeholder="Altura ex: 1.80"
            value={heightValue > 0 ? heightValue : ""}
            disabled={showItem ? true : false}
            onChange={(e) => setHeightValue(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Peso ex: 65.5"
            value={weightValue > 0 ? weightValue : ""}
            disabled={showItem ? true : false}
            onChange={(e) => setWeightValue(parseFloat(e.target.value))}
          />
          <button disabled={showItem ? true : false} onClick={handleCalculate}>
            Calcular
          </button>
        </div>
        <div className={styles.right}>
          {!showItem && (
            <div className={styles.grid}>
              {levels.map((item, k) => (
                <GridItem data={item} key={k} />
              ))}
            </div>
          )}
          {showItem && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleClose}>
                <img src="assets/leftarrow.png" width="25" />
              </div>
              <GridItem data={showItem} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

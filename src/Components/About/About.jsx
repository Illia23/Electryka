import { useState } from "react";
import css from './About.module.css'
const About = () => {
    const [step, setStep] = useState(0); 
    const [textButton, setTextButton] = useState("Podglądaj informacje o nas");
  const handleNextPart = () => {
      if (step < 4) setStep(step + 1); 
      if (step === 0) {
          setTextButton("Pokaż więcej");
      }
  };
  return (
     <div className={css.container}>
      <h1>O Nas</h1>

      {step >= 0 && (
        <p className={`${css.text} ${step >= 1 ? css.visible : ""}`}>
          <strong>Twój niezawodny partner w dziedzinie usług elektrycznych</strong>
        </p>
      )}

      {step >= 1 && (
        <p className={`${css.text} ${step >= 2 ? css.visible : ""}`}>
          Jesteśmy zespołem profesjonalnych elektryków z wieloletnim doświadczeniem, 
          specjalizujących się w wysokiej jakości rozwiązaniach dla Twojego domu, biura 
          lub obiektów przemysłowych. Naszą misją jest zapewnienie Ci bezpiecznego, 
          niezawodnego i energooszczędnego systemu elektrycznego.
        </p>
      )}

       {step >= 2 && (
        <div className={`${css.text} ${step >= 3 ? css.visible : ""}`}>
          <h2>Dlaczego warto wybrać nas?</h2>
          <ul>
            <li>
              <strong>Doświadczenie i profesjonalizm:</strong> Nasi specjaliści mają wieloletnie 
              doświadczenie w realizacji najbardziej skomplikowanych projektów elektrycznych.
            </li>
            <li>
              <strong>Jakość i bezpieczeństwo:</strong> Używamy wyłącznie certyfikowanych materiałów 
              i nowoczesnego sprzętu.
            </li>
          </ul>
        </div>
      )}

      {step >= 3 && (
        <div className={`${css.text} ${step >= 4 ? css.visible : ""}`}>
          <ul>
            <li>
              <strong>Szybkość realizacji:</strong> Dotrzymujemy ustalonych terminów i pracujemy 
              maksymalnie efektywnie.
            </li>
            <li>
              <strong>Indywidualne podejście:</strong> Dostosowujemy się do potrzeb każdego klienta, 
              oferując optymalne rozwiązania.
            </li>
          </ul>
        </div>
      )}

      {step >= 4 && (
        <p className={`${css.text} ${css.visible}`}>
          Od drobnych napraw po pełne projektowanie systemów elektrycznych — jesteśmy gotowi 
          pomóc w każdej sytuacji. Powierz swoje bezpieczeństwo elektryczne profesjonalistom!
        </p>
      )}

      {step < 4 && (
        <button className={css.button}  onClick={handleNextPart}>
          {textButton}
        </button>
      )}
    </div>

  )
}

export default About
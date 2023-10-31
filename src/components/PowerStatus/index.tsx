import { useEffect, useRef, useState } from "react";
import {
  StatusContainer,
  StatName,
  ValuesPower,
  StatBar,
  StatusMain,
  ContainerStatusBar,
} from "./styles";
import React from "react";

const ValuePowers: React.FC<IValuesPowers> = ({ powerValue, name }) => {
  const animateValue = (
    obj: HTMLElement,
    start: number,
    end: number,
    duration: number
  ) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (obj) {
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const obj = document.getElementById(`value-power-${name}`);
    if (obj) {
      animateValue(obj, 0, powerValue, 2000);
    }
  }, [powerValue]);

  const translateNames = (names: string) => {
    switch (names) {
      case "intelligence":
        return "Inteligência:";

      case "strength":
        return "Força:";

      case "speed":
        return "Velocidade:";

      case "durability":
        return "Durabilidade:";

      case "power":
        return "Poder:";

      case "combat":
        return "Combate:";

      default:
        return "";
    }
  };
  return (
    <React.Fragment>
      <StatName>
        {translateNames(name)}
        <ValuesPower id={`value-power-${name}`}>{powerValue}</ValuesPower>
      </StatName>
      <ContainerStatusBar>
        <StatBar $statusValue={powerValue}></StatBar>
      </ContainerStatusBar>
    </React.Fragment>
  );
};

const PowerStatus: React.FC<IPowerStatus> = ({ powers }) => {
  type Power = keyof typeof powers;
  const defaultValue = {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  };

  const [valuesPower, setValuesPower] = useState(defaultValue);

  useEffect(() => {
    setTimeout(() => {
      setValuesPower(powers);
    }, 1000);
  }, [powers]);

  const valueRef = useRef<HTMLDivElement>(null);

  const animateValue = (
    obj: HTMLElement,
    start: number,
    end: number,
    duration: number
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (obj) {
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  //   useEffect(() => {
  //     const obj = valueRef.current;
  //     if (obj) {
  //       animateValue(obj, 0, 100, 2000);
  //     }
  //   }, []);

  return (
    <StatusMain>
      <StatusContainer>
        {Object.keys(valuesPower)
          .filter((e, i) => i < 3)
          .map((keyValue, index) => (
            <ValuePowers
              key={index}
              powerValue={valuesPower[keyValue as Power]}
              name={keyValue}
            />
          ))}{" "}
      </StatusContainer>
      <StatusContainer>
        {Object.keys(valuesPower)
          .filter((e, i) => i >= 3)
          .map((keyValue, index) => (
            <ValuePowers
              key={index}
              powerValue={valuesPower[keyValue as Power]}
              name={keyValue}
            />
          ))}{" "}
      </StatusContainer>
    </StatusMain>
  );
};

export default PowerStatus;

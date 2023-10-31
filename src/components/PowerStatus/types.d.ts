interface IPowerStatus {
  powers: HeroPowers;
}

interface IValuesPowers {
  powerValue: number;
  name: string;
}

type HeroPowers = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

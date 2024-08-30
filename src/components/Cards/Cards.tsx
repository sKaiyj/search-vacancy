import styles from "./Cards.module.scss";
import VacancyCard from "../VacancyCard";
import { useEffect, useState } from "react";

const Cards = ({
  filters,
}: {
  filters: { city: string; skills: string[] | (string | null)[] };
}) => {
  const [cards, setCards] = useState([
    { id: 1, city: "Москва", skills: ["механик"] },
    { id: 2, city: "Кмиры", skills: ["механик", "A1"] },
    { id: 3, city: "Кмиры", skills: ["A1"] },
    { id: 4, city: "Москва", skills: ["механик", "A1"] },
    { id: 5, city: "Кмиры", skills: ["механик"] },
    { id: 6, city: "Кмиры", skills: ["A1"] },
    { id: 7, city: "Кмиры", skills: ["A1"] },
    { id: 8, city: "Москва", skills: ["A1"] },
    { id: 9, city: "Кмиры", skills: ["механик", "A1"] },
  ]);

  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const filtered = cards
      .filter((card) => {
        return filters.skills.every(
          (skill) => skill != null && card.skills.includes(skill)
        );
      })
      .filter((card) => {
        return filters.city === "" || card.city === filters.city;
      });

    setFilteredCards(filtered);
  }, [filters.city, cards, filters.skills]);

  const handleScroll = (target: HTMLElement) => {
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 40) {
      setCards([
        ...cards,
        {
          id: cards[cards.length - 1].id + 1,
          city: cards.length % 2 === 0 ? "Москва" : "Кмиры",
          skills: ["механик", "A1"],
        },
      ]);
    }
  };

  return (
    <div
      onScroll={(e) => handleScroll(e.target as HTMLElement)}
      className={styles.Cards}
    >
      {filteredCards.map(({ id: vacancyNumber, city }) => (
        <VacancyCard
          key={vacancyNumber}
          city={city}
          vacancyNumber={vacancyNumber}
        />
      ))}
    </div>
  );
};

export default Cards;

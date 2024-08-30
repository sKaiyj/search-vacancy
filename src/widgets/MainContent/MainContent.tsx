import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import styles from "./MainContent.module.scss";
import Cards from "../../components/Cards";
import { useRef, useState } from "react";
import { Skills, Filters } from "./MainContent.types";
const MainContent = () => {
  const [city, setCity] = useState("");
  const [filters, setFilters] = useState<Filters>({ city: "", skills: [] });
  const val: { current: HTMLDivElement | null } = useRef(null); // Получаю навыки таким образом т.к. onChange создает странное поведение
  const handleCityChange = (newValue: string) => {
    setCity(newValue);
  };

  const handleFiltersChange = () => {
    let skills: Skills | null = [];
    if (val.current) {
      skills = [...val.current.querySelectorAll(".MuiChip-label")].map(
        (x) => x.textContent
      );
    }
    setFilters({ city, skills: skills });
  };

  return (
    <div className={styles.MainContent}>
      <Typography
        variant='h6'
        sx={{
          fontWeight: "bold",
          padding: "20px",
          backgroundColor: "#c4c4c4",
          borderRadius: "10px 10px 0 0",
          height: "var(--vacancy-height)",
        }}
      >
        Вакансии
      </Typography>
      <div>
        <div className={styles.filters}>
          <div className={styles.skills}>
            <Autocomplete
              multiple
              sx={{
                width: 300,
              }}
              options={[{ label: "механик" }, { label: "A1" }]}
              ref={val}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Навыки'
                  variant='outlined'
                  fullWidth
                />
              )}
            />
            <Button variant='contained' onClick={handleFiltersChange}>
              Поиск
            </Button>
          </div>
          <div className={styles.city}>
            <Autocomplete
              onChange={(_, newValue) => {
                handleCityChange(newValue != undefined ? newValue.label : "");
              }}
              sx={{ width: 200 }}
              options={[{ label: "Москва" }, { label: "Кмиры" }]}
              renderInput={(inputProps) => (
                <TextField
                  {...inputProps}
                  label='Город'
                  slotProps={{
                    htmlInput: {
                      ...inputProps.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    },
                  }}
                />
              )}
            />
            <Button variant='contained' onClick={handleFiltersChange}>
              Поиск
            </Button>
          </div>
        </div>
        <Cards filters={filters} />
      </div>
    </div>
  );
};

export default MainContent;

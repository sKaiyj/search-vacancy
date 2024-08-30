import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const VacancyCard = ({
  vacancyNumber,
  city,
}: {
  vacancyNumber: number;
  city: string;
}) => {
  return (
    <Card
      sx={{ borderRadius: "10px", padding: "0px 10px", marginBottom: "20px" }}
    >
      <CardContent>
        <Typography variant='h5'>Вакансия №{vacancyNumber}</Typography>
        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Typography variant='body2'>130000-220000 руб. на руки</Typography>{" "}
          <Typography
            variant='body1'
            sx={{ bgcolor: "#e5f6fd", padding: "5px", borderRadius: "5px" }}
          >
            Опыт 3-6 лет
          </Typography>
        </Box>
        <Box sx={{ margin: "15px 0" }}>
          <Typography>{city}</Typography>
          <Typography>ООО Кмиры</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant='contained'>Откликнуться</Button>{" "}
          <Button variant='outlined'>Посмотреть контент</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;

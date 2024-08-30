import { Button } from "@mui/material";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <Button variant='contained'>Вакансии</Button>
      <Button variant='contained'>Курсы</Button>
    </div>
  );
};

export default Sidebar;

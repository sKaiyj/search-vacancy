import { Typography } from "@mui/material";
import styles from "./NavBar.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Typography variant='h4' sx={{ fontWeight: "bold" }}>
        Центр занятости населения
      </Typography>
      <AccountCircleIcon sx={{ fontSize: "40px", color: "gray" }} />
    </div>
  );
};

export default Navbar;

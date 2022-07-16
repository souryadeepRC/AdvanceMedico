import NavigationLink from "../NavigationLink/NavigationLink";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header__section}>
      <p className={classes.header__icon}>Icon</p>
      <p className={classes.header__text}>Advance Medico</p>

      <NavigationLink />
    </header>
  );
};
export default Header;

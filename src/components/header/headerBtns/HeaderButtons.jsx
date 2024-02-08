import { Link } from "react-router-dom";
import style from "./HeaderButtons.module.css";

export const HeaderButtons = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <Link to={"/register"}>
          <button className={style.btn}>Зарегистрироваться</button>
        </Link>
      </div>
      <div>
        <Link to={"/login"}>
          <button className={style.btn}>Войти</button>
        </Link>
      </div>
    </div>
  );
};

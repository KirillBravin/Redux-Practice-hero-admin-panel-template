// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterElements, resetFilter } from "../../actions";

const HeroesFilters = () => {
  const [activeElement, setActiveElement] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterElements(activeElement));
  }, [activeElement]);

  const handleClick = (e) => {
    setActiveElement(e.target.innerText);
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          <button
            className={`btn btn-outline-dark ${
              activeElement === "Все" ? "active" : ""
            } `}
            onClick={handleClick}
          >
            Все
          </button>
          <button
            className={`btn btn-danger ${
              activeElement === "Огонь" ? "active" : ""
            }`}
            onClick={handleClick}
          >
            Огонь
          </button>
          <button
            className={`btn btn-primary ${
              activeElement === "Вода" ? "active" : ""
            }`}
            onClick={handleClick}
          >
            Вода
          </button>
          <button
            className={`btn btn-success ${
              activeElement === "Ветер" ? "active" : ""
            }`}
            onClick={handleClick}
          >
            Ветер
          </button>
          <button
            className={`btn btn-secondary ${
              activeElement === "Земля" ? "active" : ""
            }`}
            onClick={handleClick}
          >
            Земля
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;

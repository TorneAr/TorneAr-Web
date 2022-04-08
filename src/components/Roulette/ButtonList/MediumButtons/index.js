import PropTypes from "prop-types";
import { BLACK_NUMBERS, RED_NUMBERS } from "common/constants";

import style from "../style.module.scss";

const MediumButtons = (props) => {
  return (
    <div className={style.buttonRow}>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 18)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("1-18")}
      >
        1 a 18
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 2, 36, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("evens")}
      >
        Pares
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, RED_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_red} ${style.button_2_1}`}
        onClick={() => props.onResultChange("reds")}
      >
        Rojas
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, BLACK_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("blacks")}
      >
        Negras
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 35, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("odds")}
      >
        Impares
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 19, 36)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("19-36")}
      >
        19 a 36
      </div>
    </div>
  );
};

MediumButtons.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
};

export default MediumButtons;

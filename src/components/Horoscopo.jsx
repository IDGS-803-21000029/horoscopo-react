import PropTypes from "prop-types";

function Horoscopo({ zodiacSign, fechaInicio, fechaFin, imgZodiacSign, textZodiac }) {
    return (
        <div>
            <h2>{zodiacSign}</h2>
            <img
                src={`${imgZodiacSign}`}
                alt={`Imagen de ${zodiacSign}`}
            />
            <p>Del {fechaInicio} al {fechaFin}</p>
            <hr />
            <p>{textZodiac}</p>
        </div>
    )
}

Horoscopo.propTypes = {
    zodiacSign: PropTypes.string,
    fechaInicio: PropTypes.string,
    fechaFin: PropTypes.string,
    imgZodiacSign: PropTypes.string,
    textZodiac: PropTypes.string
}

export default Horoscopo


import PropTypes from "prop-types";

function Calendario({ birthDate, setBirthDate, handleSubmit }) {
    return (
        <div>
            <h2>Fecha de Nacimiento</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
                <button type="submit">Consultar Signo</button>
            </form>
        </div>
    )
}

Calendario.propTypes = {
    birthDate: PropTypes.string,
    setBirthDate: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Calendario

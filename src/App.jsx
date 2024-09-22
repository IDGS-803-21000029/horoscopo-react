import { useState } from 'react'
import './App.css'
import Horoscopo from './components/Horoscopo';
import Calendario from './components/Calendario';
import ariesImg from './assets/img/aries.png';
import tauroImg from './assets/img/tauro.png';
import geminisImg from './assets/img/geminis.png';
import cancerImg from './assets/img/cancer.png';
import leoImg from './assets/img/leo.png';
import virgoImg from './assets/img/virgo.png';
import libraImg from './assets/img/libra.png';
import escorpioImg from './assets/img/escorpio.png';
import sagitarioImg from './assets/img/sagitario.png';
import capricornioImg from './assets/img/capricornio.png';
import acuarioImg from './assets/img/acuario.png';
import piscisImg from './assets/img/piscis.png';

const zodiacSigns = [
  { name: "Aries", startDate: "03-21", endDate: "04-19", img: ariesImg, text: "Puede que necesites espacio para el descanso y la reflexión esta semana, Aries, con el eclipse lunar en Piscis. Podrías sentir emociones más densas o querrás dar prioridad a tu salud mental. También puede que te intereses más por una práctica espiritual como la astrología, la manifestación o la escritura de un diario, o que te des cuenta de qué mentalidades y hábitos quieres dejar para siempre. Con la entrada del Sol en Libra durante el fin de semana, es posible que socialices más o tengas una primera cita exitosa. También podrías sentirte más cerca de tu pareja, o podrías recurrir a un amigo especial para pedirle consejo y perspectiva sobre un asunto." },
  { name: "Tauro", startDate: "04-20", endDate: "05-20", img: tauroImg, text: "Sentirás el apoyo de la gente esta semana, Tauro, con el eclipse lunar en Piscis. Puede que tengas eventos de grupo a los que deseas asistir, o que estés construyendo un mayor sentido de comunidad. Tus amigas podrían estar atravesando cambios importantes en su vida, o podrías darte cuenta de qué tipo de personas quieres mantener en tu círculo cercano. A medida que el Sol entra en Libra durante el fin de semana, puede que te centres más en la rutina. Tu trabajo puede sentirse más ajetreado de la cuenta o podrías sentirte motivada a cuidar de tu cuerpo haciendo más ejercicio, comiendo sano o durmiendo lo suficiente." },
  { name: "Géminis", startDate: "05-21", endDate: "06-20", img: geminisImg, text: "Con el eclipse lunar en Piscis, esta semana se producirán avances en tu carrera profesional. Puede que recibas más reconocimiento en tu trabajo, o que estés pensando en tu trayectoria profesional a largo plazo. Quizás quieras pivotar en otra dirección, o podrías dejar un trabajo por otra propuesta más interesante. Con la entrada del Sol en Libra durante el fin de semana, te soltarás y fluirás más, dedicándote a tus aficiones creativas. Podrías inclinarte por actividades que te aporten alegría, o podrías asistir a eventos y ver a más amigos." },
  { name: "Cáncer", startDate: "06-21", endDate: "07-22", img: cancerImg, text: "Cáncer, esta semana ampliarás tus conocimientos del mundo con el eclipse lunar en Piscis. Podrías sentir el impulso de apuntarte a un curso, o podrías darte cuenta de qué tipo de temas quieres explorar más a fondo en tu vida. Por otra parte, es posible que viajes o que se te presenten oportunidades para escribir o hablar en público. Con la entrada del Sol en Libra durante el fin de semana, podrías centrarte en tu vida familiar y la gente que más quieres. Podrías estar pensando a dónde te gustaría mudarte, o podrías estar conectando con amigos de tu infancia." },
  { name: "Leo", startDate: "07-23", endDate: "08-22", img: leoImg, text: "Te concentrarás en la superación personal esta semana, Leo, con el eclipse lunar en Piscis. Es posible que quieras entender mejor por qué tienes ciertas emociones o patrones de comportamiento, y podrías recurrir a la terapia u otra forma de sanación. Además, podrías gastar más dinero o destinar tus ingresos al ahorro. Con la entrada del Sol en Libra durante el fin de semana, podrías viajar más, asistir a eventos en tu ciudad o reunirte con amigos. También podrías estar más inspirada para aprender un nuevo hobby." },
  { name: "Virgo", startDate: "08-23", endDate: "09-22", img: virgoImg, text: "Esta semana, Virgo, con el eclipse lunar en Piscis, tomarás importantes decisiones sobre tus relaciones más cercanas. Es posible que estés trabajando para cambiar ciertas mentalidades que tienes en torno a la conformación de una pareja, o podrías estar tomando una decisión con respecto al futuro de tu relación. Con la entrada del Sol en Libra durante el fin de semana, podrías sentirte más motivada en el trabajo. Se te ocurrirán ideas para presentar mejor en reuniones formales, o podrías estar ampliando tu propio negocio. Querrás encontrar formas de ganar más dinero y sentirte valorada por tus habilidades." },
  { name: "Libra", startDate: "09-23", endDate: "10-22", img: libraImg, text: "Esta semana reflexionarás sobre el trabajo y tu rutina diaria, Libra, con el eclipse lunar en Piscis. Es posible que estés haciendo malabarismos con numerosos proyectos a la vez, o que estés buscando la manera de tener un mejor equilibrio entre el trabajo y la vida personal. También podrías adoptar hábitos cotidianos más saludables. A medida que el Sol se mueva hacia tu signo durante el fin de semana, te sentirás más entusiasmada con los objetivos personales que estás desarrollando, y puede que estés explorando varios hobbies nuevos. Puede que incluso quieras experimentar con tu estilo, o que te sientas segura de esos rasgos que te distinguen." },
  { name: "Escorpio", startDate: "10-23", endDate: "11-21", img: escorpioImg, text: "Construirás una mayor autoestima esta semana, Escorpio, con el eclipse lunar en Piscis. Es posible que quieras inclinarte por aficiones que te aporten alegría, en lugar de realizar actividades para obtener una validación externa. También podrías reflexionar sobre cómo poner tus habilidades creativas al servicio de tu trabajo o de un proyecto que te apasione. Con la entrada del Sol en Libra durante el fin de semana, es posible que necesites espacio para estar sola. Podrías sentirte un poco baja de energía o más emocional, y podrías encontrar una mayor paz en la meditación, el journaling o la conexión con la naturaleza." },
  { name: "Sagitario", startDate: "11-22", endDate: "12-21", img: sagitarioImg, text: "Experimentarás una mayor actividad en casa esta semana, Sagitario, con el eclipse lunar en Piscis. Podrías estar preparándote para mudarte o redecorar, o podrías estar haciendo una limpieza profunda de armario. También es posible que veas a la familia, pero podrías estar emocionada por un recuerdo de la infancia o una relación familiar. A medida que el Sol se mueva hacia Libra durante el fin de semana, te reunirás con amigos y asistirás a actividades de grupo. También podrías sentirte más esperanzada acerca de tus objetivos a largo plazo, u otras personas podrían conectarte con oportunidades realmente positivas." },
  { name: "Capricornio", startDate: "12-22", endDate: "01-19", img: capricornioImg, text: "Estarás en movimiento esta semana, Capricornio, con el eclipse lunar en Piscis. Podrías quedar con amigos, asistir a eventos o viajar. También podrías estar preparándote para lanzar un proyecto de escritura o dar un discurso en público, y buscarás la mejor manera de comunicar tus ideas a la gente. A medida que el Sol entre en Libra durante el fin de semana, es posible que empieces a ver desarrollos profesionales más importantes. Podrías iniciar proyectos importantes o recibir noticias sobre oportunidades interesantes. Es posible que también pienses detenidamente en tus objetivos profesionales a largo plazo." },
  { name: "Acuario", startDate: "01-20", endDate: "02-18", img: acuarioImg, text: "Esta semana reflexionarás sobre tus finanzas personales, Acuario, con el eclipse lunar en Piscis. Es posible que estés gastando más dinero de lo habitual o que se te ocurran formas de aumentar tus ingresos. También podrías recibir noticias sobre nuevas oportunidades laborales, o podrías querer trabajar en la expansión de tu propio negocio. Con la entrada del Sol en Libra durante el fin de semana, es posible que viajes o que pases más tiempo leyendo e investigando. También podrías estar particularmente interesada en una cultura o una creencia espiritual diferente a la tuya." },
  { name: "Piscis", startDate: "02-19", endDate: "03-20", img: piscisImg, text: "Esta semana, Piscis, con el eclipse lunar en tu signo, tomarás importantes decisiones sobre tu identidad. Es posible que descubras intereses que no sabías que tenías, o que te liberes de las restricciones que te impones a ti misma. Con la entrada del Sol en Libra durante el fin de semana, podrías mejorar tu forma de reaccionar ante los conflictos en las relaciones y comprender mejor tus propias emociones. Además, podrías estar gastando más dinero de lo normal, pagando deudas o encontrando formas de ser más inteligente con tus finanzas." },
];

function getZodiacSign(dateString) {
  const [, month, day] = dateString.split("-");
  const formattedDate = `${month}-${day}`;

  for (const sign of zodiacSigns) {
    if (
      (formattedDate >= sign.startDate && formattedDate <= sign.endDate) ||
      (sign.startDate === "12-22" && formattedDate >= sign.startDate) ||
      (sign.endDate === "01-19" && formattedDate <= sign.endDate)
    ) {
      return sign;
    }
  }
  return { name: "Signo no encontrado", startDate: "", endDate: "" };
}

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [imagen, setImagen] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const sign = getZodiacSign(birthDate);
    setZodiacSign(sign.name);
    setFechaInicio(sign.startDate);
    setFechaFin(sign.endDate);
    setImagen(sign.img);
    setText(sign.text);
  };

  return (

    <div className="container">
      {/* Componente de Calendario */}
      <div className="card">
        <Calendario
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* Componente de Horóscopo */}
      <div className="card">
        {zodiacSign && (
          <Horoscopo
            zodiacSign={zodiacSign}
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            imgZodiacSign={imagen}
            textZodiac={text}
          />
        )}
      </div>
    </div>
  );
}

export default App;
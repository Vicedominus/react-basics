import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonial 
          image='Shawn'
          name='Shawn Wang'
          country='Singapur'
          position='Software Engineer'
          company='Amazon'
          review='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
        <Testimonial 
          image='Sarah'
          name='Sarah Chima'
          country='Nigeria'
          position='Software Engineer'
          company='ChatDesk'
          review='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />
        <Testimonial 
          image='Emma'
          name='Emma Bostian'
          country='Sweden'
          position='Software Engineer'
          company='Spotify'
          review='Siempre he tenido problemas para aprender JavaScript. 
          He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. 
          Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp 
          me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de 
          mis sueños como ingeniero de software en Spotify.' />
      </div>
    </div>
  );
}

export default App;

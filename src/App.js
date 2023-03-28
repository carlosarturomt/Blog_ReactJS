// import logo from './logo.svg';
import React, {useState} from 'react'; // Hook that modify the state
import './App.css';
import './css/materialize.min.css';
import './css/index.css';
import './css/utilities.css';
import './css/preloader.css';
import EntryCard from './Components/EntryCard';

function App() {
  // State Title with Hooks
  const [ title, setTitle ] = useState("Noticias");

  const [ blogEntries, setblogEntries ] = useState([
    {
      entryTitle: "ReactJS",
      content: "La etiqueta aside se utiliza para definir algún tipo de contenido relacionado con la página o artículo definido en el interior de la etiqueta main.",
      picture: "https://www.programaenlinea.net/wp-content/uploads/2022/11/pasted-image-0-2.png",
      link: "1"
    },
    {
      entryTitle: "Firebase",
      content: "Por ejemplo, podrías agregar una lista de artículos o de etiquetas relacionadas con la página, entre otras cosas. ",
      picture: "https://miro.medium.com/v2/resize:fit:1184/1*eGLVD4OsDN2aO8B979sh_g.png",
      link: "2"
    },
  ]);

  const [ entry, setEntry ] = useState({})

  const changeHandler = event =>{
    const value =event.target.value
    const property = event.target.name
    setEntry( { ...entry, [property]:value } )
  }

  const saveHandler = () => {
    setblogEntries([...blogEntries, entry])
  }

  return (
    <section className="App">
      <article className="section center-align white">
        <div className="container">
          <aside className='class="col s12 m6 l4"'>
            <form>
              <div>
                <label htmlFor=''>Título</label>
                <input type="text" name="entryTitle" onChange={changeHandler}></input>
              </div>
              <div>
                <label htmlFor=''>Contenido</label>
                <input type="text" name="content" onChange={changeHandler}></input>
              </div>
              <div>
                <label htmlFor=''>Imagen</label>
                <input type="text" name="picture" onChange={changeHandler}></input>
              </div>
              <div>
                <label htmlFor=''>Link</label>
                <input type="text" name="link" onChange={changeHandler}></input>
              </div>
              <button type='button' className="btn indigo darken-4" onClick={saveHandler}>Guardar</button>
            </form>
          </aside>
          <div className="section center-align">
            <h1>{title}</h1>
            <aside id="card-pagination" className="row">
              {
                blogEntries.map( (entry, index) => <EntryCard entryData = {entry} /> )
              }
            </aside>
          </div>
        </div>
      </article>
    </section>
  );
}

export default App;

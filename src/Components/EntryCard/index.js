// import logo from '../../logo.svg';

const EntryCard = props => {

    const { entryData } = props;
    const { entryTitle, content, picture, link } = entryData;
    const button = "Ver más"


    return (
        <aside className="col s12 m6 l4">
            <main className="card hoverable">
                <header className="card-image">
                    <a href="" target="">
                        <img src={picture} className="responsive-img" alt={entryTitle}/>
                    </a>
                    <span className="card-title"></span>
                </header>
                <article className="card-content">
                    <h5>{entryTitle}</h5>
                    <p>
                    {
                        content.length > 20
                        ? `${content.slice(0,20)}...`
                        : content
                        }
                    </p>
                </article>
                <footer className="card-action">
                    <a href={link} className="btn indigo darken-4">{button}</a>
                </footer>
            </main>
        </aside>
    )
}

export default EntryCard;
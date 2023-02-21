import '../style/Home.scss'

function HomePage() {
    return (
        <div className="HomePage page-template">
            <h1>ReactJS Starter</h1>
            <a className="hover-effect" href="https://github.com/thomasjeu03/starter_reactjs" target="_blank" rel="noopener">
                <div>
                    <span>The github repository</span>
                    <span>The github repository</span>
                </div>
            </a>
            <a className="hover-effect" href="https://thomasjeu.fr" target="_blank" rel="noopener">
                <div>
                    <span>Made by Thomas JEU</span>
                    <span>Made by Thomas JEU</span>
                </div>
            </a>
        </div>
    )
}

export default HomePage
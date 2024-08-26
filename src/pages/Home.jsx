import Header from '../components/header/Header'


export default function Home() {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>HTML, CSS, JavaScript, React, NPM, BootStrap</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Backend</h2>
                            <p>NodeJS, Django, MySQL, PostgreSQL, Python</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    )
}
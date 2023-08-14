import React from 'react'
import '../Services/Services.scss'

const Services = () => {
    return (
        <div className='services' id='work'>
            <div className="container">
                <h1>
                    <strong>
                        Мои
                    </strong>
                    Услуги
                </h1>
                <ul>
                    <li>
                        Веб-сайты
                        <p>
                            Мы разрабатываем веб-сайты с высоким качеством, от корпоративных сайтов до много-функциональных платформ.
                        </p>
                    </li>
                    <li>
                        Брендинг
                        <p>
                            Разработка креативного и уникального логотипа для вашего проекта и создание его брендинга
                        </p>
                    </li>
                    <li>
                        UI&UX
                        <p>
                            Разработка MindMap проекта и дизайн с оптимальным решением на основе его архитектуры
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Services
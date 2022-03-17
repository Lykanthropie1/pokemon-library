import React from 'react'

import classes from './About.module.scss'

const About = () => (
    <div className={classes.component}>
        <h2>Дорогой друг!</h2>
        <article>
            Я очень рад, что ты находишься на страницах моего приложения,
            посвященного сериалу Рик и Морти!
            Здесь ты сможешь получить информацию о некоторых персонажах из этого сериала.
            Ты сможешь сделать это
            двумя способами: в виде раскрывающегося списка персонажей или в виде карточек (все карточки кликабельные).
            Также, для твоего удобства, здесь есть функция поиска по персонажам и сортировка по их имени, полу и расе
            (по возрастанию и по убыванию). Приложение отображается корректно на любых устройствах.
            Надеюсь ты хорошо проведёшь время!
        </article>
    </div>
);

export default About;
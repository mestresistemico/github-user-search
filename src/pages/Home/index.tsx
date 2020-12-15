/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import ButtonIcon from 'core/components/ButtonIcon';

const Home = () => (
    <div className="home-container">
        <div className="col-6">
            <h1 className="text-title">
                Desafio do Capítulo 3,<br /> Bootcamp DevSuperior
                </h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br /><br />
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki:
                <a href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
                <button className="btn btn-primary border-radius-15">
                    Começar
                </button>
            </Link>
        </div>
    </div>
)

export default Home;
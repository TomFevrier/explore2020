import React, { Component } from 'react';
import './Masthead.css';


export default class Element extends Component {

    componentDidMount() {
        require('../../js/external/twitter.js')();
    }

    render() {

        return (
            <div className='Masthead'>
                <div className='Masthead__item'>
                    <span className='Masthead__label white'>Conçu, écrit et réalisé par</span>
                    <span className='Masthead__details'>Sophiane Amazian, Hortense Leblanc, Emma Grivotte, Thaïs Chaigne, Julien Apaloo et Tom Février<a href='//twitter.com/sciencespoEDJ' className='twitter-follow-button' data-show-count='false' data-lang='fr' data-dnt='true'>Suivre</a></span>
                </div>
                <div className='Masthead__item'>
                    <span className='Masthead__label white'>Graphisme et intégration</span>
                    <span className='Masthead__details'>Thaïs Chaigne, Hortense Leblanc et Tom Février</span>
                </div>
				<div className='Masthead__item'>
					<span className='Masthead__label white'>Photos</span>
					<span className='Masthead__details'>Thaïs Chaigne, Hortense Leblanc, United Managers, archives L’Équipe</span>
				</div>
                <div className='Masthead__item'>
                    <span className='Masthead__label white'>Développement</span>
                    <span className='Masthead__details'>Raphaël Dardeau<a href='//twitter.com/iron_dev' className='twitter-follow-button' data-show-count='false' data-lang='fr' data-dnt='true'>Suivre</a></span>
                </div>
                <div className='Masthead__item'>
                    <span className='Masthead__label'></span>
                    <span className='Masthead__details'></span>
                </div>
                <div className='Masthead__item Masthead__item--full'>
                    <span className='Masthead__details'><span className='Masthead__label white'>Remerciements :</span> Fred Gauquelin et United Managers, l’AG Caen, Grégory Blachier et l’École de Journalisme de Sciences Po, Julien Nguyen Dang</span>
                </div>
            </div>
        );
    }
}

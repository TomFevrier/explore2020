import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
		height = Math.min(document.documentElement.clientHeight, config.ratio.height),
		mobile = false,
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

	if (width < config.ratio.width) {
		mobile = true;
	}
    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
		boardTop: boardTop,
		mobile : mobile
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
			boardTop:getSizes().boardTop,
			mobile:getSizes().mobile
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
				boardTop:getSizes().boardTop,
				mobile:getSizes().mobile
            });
        });
    }

    render() {
		var mobile = this.state.mobile;
        return (
            <div id='board' className='Board' style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>

                {/* Introduction */}
				<div className='Board__slide Board__slide--dark'>
                    <Element name='commentateurs-feather.png' positionLeft={mobile ? '0' : '30%'} index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[0]} positionTop='15%' color='white'></Edito>
					<Element name='ultras.png' index='m2' positionLeft='50%'></Element>
                </div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[1]} positionTop='40%' color='white'></Edito>
                </div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.intro[2]} positionTop='10%' color='white'></Edito>
					<Element name='coach.png' positionLeft='50%' index='m1' opacity={0.3}></Element>
				</div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[3]} positionBottom='15%' color='white'></Edito>
					<Element name='machine1.png' positionLeft='30%' index='p2'></Element>
                </div>

				{/* Avant-gardisme */}
				<div className='Board__slide Board__slide--dark' style={!mobile ? { minWidth: '55vh' } : {}}>
                    <Skew position='left' name='skew1-texte.png' bg='skew1-image.png'></Skew>
                </div>
				<div className='Board__slide Board__slide' style={!mobile ? { minWidth: '55vh' } : {}}>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[0]} positionTop='30%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='instal-matos.png' index='p1'></Element>
                    <Edito content={this.props.datas.text.avantGardisme[1]} positionBottom='5%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='ballonhautgauche.png' index='p2'></Element>
                    <Edito content={this.props.datas.text.avantGardisme[2]} positionTop='50%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[3]} positionTop='5%'></Edito>
					<Element name='stat-mobile.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
                    <Element name='citation-gauquelin.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='stat-laptop.png' index='p1'></Element>
                    <Edito content={this.props.datas.text.avantGardisme[4]} positionBottom='5%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[5]} positionTop='30%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Video id='x7u1b8w' ratio='1' positionBottom='calc(-200px + 20%)' positionTop='auto' maxHeight='400'></Video>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[6]} positionTop='15%'></Edito>
					<Element name='joueurs.png' index='m2' positionLeft='25%' opacity={0.5}></Element>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[7]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide' style={mobile ? { minWidth: '800px' } : {}}>
					<Element name='communique-um-large.png' positionLeft={mobile ? '0' : '-20%'} index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[8]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='infogV40.png' positionLeft={mobile ? '0' : '20%'} index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[9]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide' style={mobile ? { minWidth: '800px' } : {}}>
					<Element name='votesV2.png' positionLeft={mobile ? '0' : '-20%'} index='p1'></Element>
				</div>

				<div className='Board__slide Board__slide'>
					<Element name='citation-lepen1.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[10]} positionTop='5%'></Edito>
					<Element name='joueurs-data-V2.png' index='m2' positionLeft='25%' opacity={0.6}></Element>
                </div>
				<div className='Board__slide Board__slide'>
					<Video id='x7u1bu0' ratio='1' positionTop='50%' maxHeight='400'></Video>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='citation-lepen2.png' index='p1'></Element>
                    <Edito content={this.props.datas.text.avantGardisme[11]} positionBottom='5%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[12]} positionTop='10%'></Edito>
					<Element name='tribune.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='citation-camillo.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[13]} positionBottom='15%'></Edito>
					<Element name='machine2.png' positionLeft='30%' index='p2'></Element>
                </div>

				{/* Retour vers le futur */}
				<div className='Board__slide Board__slide'>
					<div style={{
						position: 'absolute',
						height: 'inherit',
						width: '150%',
						transform: 'skew(-20deg)',
						backgroundImage: 'linear-gradient(#003366, #000000)'
					}} />
					<Element name='ballonhautdroite-clair.png' index='p2' positionLeft='25%'></Element>
					<Edito content={this.props.datas.text.retourFutur[0]} positionBottom='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.retourFutur[1]} positionTop='15%' color='white'></Edito>
					<Element name='banc.png' positionLeft='50%' index='m2' opacity={0.5}></Element>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.retourFutur[2]} positionTop='15%' color='white'></Edito>
					<Element name='machine3.png' positionLeft='30%' index='p2'></Element>
				</div>

				{/* Rêve ou révolution ? */}
				<div className='Board__slide Board__slide--dark' style={!mobile ? { minWidth: '55vh' } : {}}>
                    <Skew position='left' name='skew2-texte.png' bg='skew2-image.png'></Skew>
                </div>
				<div className='Board__slide Board__slide' style={!mobile ? { minWidth: '55vh' } : {}}>
                </div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[0]} positionTop='30%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[1]} positionTop='10%'></Edito>
					<Element name='logos-clubs1.png' index='p2'></Element>
					<Element name='logos-clubs2.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<Element name='ardoise.png' positionLeft='25%' index='m1' opacity={0.4}></Element>
					<Edito content={this.props.datas.text.reveRevolution[2]} positionBottom='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[3]} positionTop='10%'></Edito>
					<Element name='joueur-solo.png' index='m1' positionLeft='25%' opacity={0.6}></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<iframe src='https://flo.uri.sh/visualisation/2137621/embed' frameBorder='0' scrolling='no'
						style={{
							position: 'absolute',
							width: mobile ? '80%' : '60%',
							height: mobile ? '80%' : '90%',
							zIndex: 42,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)'
						}}>
					</iframe>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[4]} positionTop='10%'></Edito>
					<Element name='joueur1.png' index='m1' opacity={0.6}></Element>
					<Element name='joueur2.png' index='m2' positionLeft='75%' opacity={0.4}></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[5]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[6]} positionTop='10%'></Edito>
					<Element name='ballonbasdroite.png' index='p2'></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[7]} positionBottom='5%'></Edito>
					<Element name='machine4.png' positionLeft='30%' index='p2'></Element>
				</div>

				{/* Outro */}
				<div className='Board__slide Board__slide' style={!mobile ? { minWidth: '55vh' } : {}}>
                    <Skew position='left' name='skew3-texte.png' bg='skew3-image.png'></Skew>
                </div>
				<div className='Board__slide Board__slide--dark' style={!mobile ? { minWidth: '55vh' } : {}}>
                </div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[0]} positionTop='10%' color='white'></Edito>
					<Element name='sondage.png' index='p1'></Element>
					<Element name='stade-pdp.png' index='m2'></Element>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Element name='score.png' index='p1'></Element>
					<Edito content={this.props.datas.text.outro[1]} positionBottom='10%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[2]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[3]} positionTop='30%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[4]} positionTop='15%' color='white'></Edito>
					<Element name='psg-moins-bleu.png' index='m1' positionLeft='30%' opacity={0.6}></Element>
				</div>

                <div className='Board__slide Board__slide--dark'>
                    <Masthead />
                </div>
            </div>
        )
    }
}

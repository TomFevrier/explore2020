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
                    <Element name='commentateurs.png' positionLeft={mobile ? '0' : '30%'} index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[0]} positionTop='15%' color='white'></Edito>
                </div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[1]} positionTop='15%' color='white'></Edito>
                </div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.intro[2]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
                    <Edito content={this.props.datas.text.intro[3]} positionTop='15%' color='white'></Edito>
					<Element name='machine1.png' positionLeft='30%' index='p2'></Element>
                </div>

				{/* Avant-gardisme */}
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[0]} positionBottom='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='instal-matos.png' index='p1'></Element>
                    <Edito content={this.props.datas.text.avantGardisme[1]} positionBottom='10%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[2]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[3]} positionTop='15%'></Edito>
					<Element name='stat-mobile.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
                    <Element name='citation-gauquelin.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[4]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[5]} positionBottom='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='stat-laptop.png' index='p1'></Element>
                </div>
				<div className='Board__slide Board__slide'>
					<Video id='x7u1b8w' ratio='1' positionBottom='calc(-200px + 5%)' positionTop='auto' maxHeight='400'></Video>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[6]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[7]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='communique-um.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[8]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='infogV12.png' positionLeft={mobile ? '0' : '20%'} index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[9]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='votes.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<Element name='citation-lepen1.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[10]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
					<Element name='citation-lepen2.png' index='p1'></Element>
				</div>
				<div className='Board__slide Board__slide'>
					<Video id='x7u1bu0' ratio='1' positionTop='calc(200px + 5%)' maxHeight='400'></Video>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[11]} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide'>
                    <Edito content={this.props.datas.text.avantGardisme[12]} positionTop='15%'></Edito>
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
					<Edito content={this.props.datas.text.retourFutur[0]} positionBottom='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.retourFutur[1]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.retourFutur[2]} positionTop='15%' color='white'></Edito>
					<Element name='machine3.png' positionLeft='30%' index='p2'></Element>
				</div>

				{/* Rêve ou révolution ? */}
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[0]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[1]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[2]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[3]} positionTop='15%'></Edito>
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
					<Edito content={this.props.datas.text.reveRevolution[4]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[5]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[6]} positionTop='15%'></Edito>
				</div>
				<div className='Board__slide Board__slide'>
					<Edito content={this.props.datas.text.reveRevolution[7]} positionBottom='15%'></Edito>
					<Element name='machine4.png' positionLeft='30%' index='p2'></Element>
				</div>

				{/* Outro */}
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[0]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[1]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[2]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[3]} positionTop='15%' color='white'></Edito>
				</div>
				<div className='Board__slide Board__slide--dark'>
					<Edito content={this.props.datas.text.outro[4]} positionTop='15%' color='white'></Edito>
				</div>


                {/*
				<div className='Board__slide board-small-slide'>
					<Skew position='left' name='' bg=''></Skew>
				</div>

				<div className='Board__slide Board__slide--top'>
                    <Element name='FOND2.png' index='p2' positionLeft='-10%'  ></Element>
                </div>
				<div className='Board__slide Board__slide--top'>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop='15%'></Edito>
                </div>
				<div className='Board__slide Board__slide--top'>
                    <Edito content={this.props.datas.text[0].zone_1} positionTop='15%'></Edito>
                </div>

                <div className='Board__slide Board__slide--top'>
					<iframe src='https://flo.uri.sh/visualisation/2137621/embed' frameborder='0' scrolling='no'
						style={{ position: 'absolute', width: '100%', height: '90%', zIndex: 42, top: '50%', transform: 'translateY(-50%)' }}>
					</iframe>
                </div>
				*/}
                <div className='Board__slide Board__slide--dark'>
                    <Masthead />
                </div>
            </div>
        )
    }
}

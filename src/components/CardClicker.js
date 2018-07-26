import React, {Component, Fragment} from 'react';
// import card01 from '../assets/01.png';
import deck from './CardList';

class CardClicker extends Component {
  state = {
    currentCard: 0,
    clicks: []
  };

  decrease = () => {
    let currentCard = this.state.currentCard - 1;
    if (currentCard < 0) {
      currentCard = Object.keys(deck).length - 1;
    }
    this.setState({currentCard});
  }

  increase = () => {
    let currentCard = this.state.currentCard + 1;
    currentCard %= Object.keys(deck).length;
    this.setState({currentCard});
  }

  card = () => {
    let card = this.state.currentCard;
    if (this.state.currentCard < 10) {
      card = '0' + this.state.currentCard;
    }
    card = 'card' + card;
    let img = deck[card];
    return img;
  }

  handleImgClick = (ev) => {
    let percentX = ev.nativeEvent.offsetX / ev.target.width;
    let percentY = ev.nativeEvent.offsetY / ev.target.height;
    console.log(percentX, percentY);
    let click = {percentX, percentY, card: this.state.currentCard};
    let clicks = [...this.state.clicks, click];
    this.setState({clicks});
  }

  render() {
    return <Fragment>
      <p>
        {this.card()} {' '} {this.state.currentCard}
      </p>
      <div>
        <img src={this.card()} onClick={this.handleImgClick} />
      </div>
      <div className="pagination-controls">
        <button onClick={this.decrease}>prev</button>
        <button onClick={this.increase}>next</button>
      </div>

      {this.state.clicks.map((click, key) => {
        return <div key={key}>
          {click.card}{' '}
          {click.percentX}{' '}
          {click.percentY}
        </div>
      })}
    </Fragment>
  }
}

export default CardClicker;
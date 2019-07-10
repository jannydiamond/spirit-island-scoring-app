import React from 'react';
import Header from '../../components/Header';

import Content from './Content';
import FloatingButton from '../../components/FloatingButton';
import TileInfoList from '../Overview/TileInfoList';
import Scoring from '../Overview/Scoring';
import SpiritBadge from '../Overview/SpiritBadge';

import { Games } from '../../data';
import { Game, Player } from '../../types';
import Label from './Label';

const ScoringView = (props: any) => {
  const game = Games.filter((game: Game) => game.id === parseInt(props.match.params.id))[0];

  const renderPlayers = (game: Game) => {
    return game.players.map(
      (player: Player) => (
        <tr key={player.id}>
          <td className="spirit"><SpiritBadge name={player.spirit.name} id={player.spirit.id} /></td>
          <td className="board">{player.board}</td>
          <td className="player">{player.name}</td>
        </tr>
      )
    );
  }

  return (
    <div>
      <Header title="Scoring" back="/overview" />
      <Content>
        <div className="content-header">
          <div className="content-header__content">
            <h2>{game.date}</h2>
            <TileInfoList playerCount={game.players.length} difficulty={game.difficulty} />
          </div>
          <Scoring score={game.scoring} />
        </div>
        <section>
          <h2>Players</h2>
          <table>
            <thead>
              <tr>
                <th className="spirit">Spirit</th>
                <th className="board">Board</th>
                <th className="player">Player</th>
              </tr>
            </thead>
            <tbody>
              { renderPlayers(game) }
            </tbody>
          </table>
        </section>
        <section>
          <h2>Game Setup</h2>
          <p><Label>Map Type:</Label>{game.mapType}</p>
          <p><Label>Adversary:</Label>{game.adversary ? `${game.adversary.name}, Level ${game.adversary.level}` : '-'}</p>
          <p><Label>Scenario:</Label>{game.scenario ? `${game.scenario.name}, Level ${game.scenario.level}` : '-'}</p>
          <p><Label>Blight Card:</Label>{game.blightCard ? 'yes': 'no'}</p>
          <p><Label>Event Deck:</Label>{game.eventDeck ? 'yes' : 'no'}</p>
        </section>
        <section>
          <h2>Game Results</h2>
          <p><Label>Blight Tokens:</Label>{game.blightToken}</p>
          <p><Label>Dahans:</Label>{game.dahan}</p>
          <p><Label>Explorer Cards:</Label>{game.explorerCards}</p>
        </section>
        
      </Content>
      <FloatingButton icon="edit" />
    </div>
  )
}

export default ScoringView;
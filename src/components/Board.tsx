import React, { useState } from 'react';
import './Board.css';

function Board() {

	const [players, setPlayers] = useState([
		{ id: 1, color: 'blue', position: 1 },
		{ id: 2, color: 'green', position: 1 },
		{ id: 3, color: 'red', position: 2 },
		{ id: 4, color: 'orange', position: 1 },
	]);

	const [cells, setCells] = useState([
		{ id: 0, color: 'white' },
		{ id: 1, color: 'white' },
		{ id: 2, color: 'white' },
		{ id: 3, color: 'white' },
		{ id: 4, color: 'white' },
		{ id: 5, color: 'white' },
		{ id: 7, color: 'white' },
	]);

	const getPlayersInCell = (cellId: cellId) => {
		return players.filter((player) => player.position === cellId);
	};

	return (
		<div className="board">
			{cells.map((cell) => (
				<div 
					key={cell.id}
					className="cell"
					style={{backgroundColor: cell.color}}
				>
					{getPlayersInCell(cell.id).map((player, index, array) => (
						<div
							key={player.id}
							//className="player"
							className={`player players-in-cell-${getPlayersInCell(cell.id).length} player-number-${index}`}
							style={{
								backgroundColor: player.color,
								// width: `${Math.max(100 - 25 * (array.length - 1), 10)}%`,
                				// height: `${Math.max(100 - 25 * (array.length - 1), 10)}%`,
								// left: `${index * (10 * (array.length - 1))}px`,
								// top: `${index * (10 * (array.length - 1))}px`
							}}
						>
							
						</div>
					))}	
				</div>
			))}
		</div>
	)
}

export default Board;
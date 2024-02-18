import React, { useState } from 'react';
import './Board.css';

function Board() {

	const [players, setPlayers] = useState([
		{ id: 1, color: 'DeepSkyBlue', position: 379 },
		{ id: 2, color: 'LawnGreen', position: 379 },
		{ id: 3, color: 'Violet', position: 379 },
	]);

	const totalCells = 720;
	const cellsPerColor = 8;

	const colorRanges = [
	  { color: 'red', startId: 0, endId: 9 },
	  { color: 'red', startId: 40, endId: 49 },
	  { color: 'red', startId: 80, endId: 89 },
	  { color: 'red', startId: 120, endId: 129 },
	  { color: 'red', startId: 160, endId: 169 },
	  { color: 'red', startId: 200, endId: 209 },
	  { color: 'red', startId: 240, endId: 249 },
	  { color: 'red', startId: 280, endId: 289 },
	  { color: 'red', startId: 320, endId: 329 },

	  { color: 'purple', startId: 10, endId: 19 },
	  { color: 'purple', startId: 50, endId: 59 },
	  { color: 'purple', startId: 90, endId: 99 },
	  { color: 'purple', startId: 130, endId: 139 },
	  { color: 'purple', startId: 170, endId: 179 },
	  { color: 'purple', startId: 210, endId: 219 },
	  { color: 'purple', startId: 250, endId: 259 },
	  { color: 'purple', startId: 290, endId: 299 },
	  { color: 'purple', startId: 330, endId: 339 },

	  { color: 'green', startId: 20, endId: 29 },
	  { color: 'green', startId: 60, endId: 69 },
	  { color: 'green', startId: 100, endId: 109 },
	  { color: 'green', startId: 140, endId: 149 },
	  { color: 'green', startId: 180, endId: 189 },
	  { color: 'green', startId: 220, endId: 229 },
	  { color: 'green', startId: 260, endId: 269 },
	  { color: 'green', startId: 300, endId: 309 },
	  { color: 'green', startId: 340, endId: 349 },

	  { color: 'yellow', startId: 30, endId: 39 },
	  { color: 'yellow', startId: 70, endId: 79 },
	  { color: 'yellow', startId: 110, endId: 119 },
	  { color: 'yellow', startId: 150, endId: 159 },
	  { color: 'yellow', startId: 190, endId: 199 },
	  { color: 'yellow', startId: 230, endId: 239 },
	  { color: 'yellow', startId: 270, endId: 279 },
	  { color: 'yellow', startId: 310, endId: 319 },
	  { color: 'yellow', startId: 350, endId: 359 },

	  { color: 'blue', startId: 360, endId: 369 },
	  { color: 'blue', startId: 400, endId: 409 },
	  { color: 'blue', startId: 440, endId: 449 },
	  { color: 'blue', startId: 480, endId: 489 },
	  { color: 'blue', startId: 520, endId: 529 },
	  { color: 'blue', startId: 560, endId: 569 },
	  { color: 'blue', startId: 600, endId: 609 },
	  { color: 'blue', startId: 640, endId: 649 },
	  { color: 'blue', startId: 680, endId: 689 },

	  { color: 'white', startId: 370, endId: 379 },
	  { color: 'white', startId: 410, endId: 419 },
	  { color: 'white', startId: 450, endId: 459 },
	  { color: 'white', startId: 490, endId: 499 },
	  { color: 'white', startId: 530, endId: 539 },
	  { color: 'white', startId: 570, endId: 579 },
	  { color: 'white', startId: 610, endId: 619 },
	  { color: 'white', startId: 650, endId: 659 },
	  { color: 'white', startId: 690, endId: 699 },

	  { color: 'orange', startId: 380, endId: 389 },
	  { color: 'orange', startId: 420, endId: 429 },
	  { color: 'orange', startId: 460, endId: 469 },
	  { color: 'orange', startId: 500, endId: 509 },
	  { color: 'orange', startId: 540, endId: 549 },
	  { color: 'orange', startId: 580, endId: 589 },
	  { color: 'orange', startId: 620, endId: 629 },
	  { color: 'orange', startId: 660, endId: 669 },
	  { color: 'orange', startId: 700, endId: 709 },

	  { color: 'grey', startId: 390, endId: 399 },
	  { color: 'grey', startId: 430, endId: 439 },
	  { color: 'grey', startId: 470, endId: 479 },
	  { color: 'grey', startId: 510, endId: 519 },
	  { color: 'grey', startId: 550, endId: 559 },
	  { color: 'grey', startId: 590, endId: 599 },
	  { color: 'grey', startId: 630, endId: 639 },
	  { color: 'grey', startId: 670, endId: 679 },
	  { color: 'grey', startId: 710, endId: 719 },
	];

	const initialCells = Array.from({ length: totalCells }, (_, index) => ({
	  id: index,
	  color: getColorByIndex(index, cellsPerColor, colorRanges),
	}));

	function getColorByIndex(index: number, cellsPerColor: number, ranges: ColorRange[]): string {
	  for (const range of ranges) {
	    if (index >= range.startId && index <= range.endId) {
	      return range.color;
	    }
	  }
	  return 'white'; // Color predeterminado si no se encuentra en ningún rango
	}

	const [cells, setCells] = useState(initialCells);

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
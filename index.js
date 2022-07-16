window.onload = function () {
	for(let i = 0; i<9;i++){
		document.getElementById('game').innerHTML+='<div class="block"><p class="block-p"></p></div>';
	}
	const blocks = document.getElementsByClassName('block-p');
	const title = document.querySelector('.title')
	const audio = document.querySelector('.audio')
	
	audio.play();
	let result = '';
	let step = 0;
	let player = "X";

	document.getElementById('game').onclick = function(event) {
		if(event.target.className == 'block-p') {
			if(!event.target.innerHTML) {
				event.target.innerHTML = player;
			}else {
			alert("Ячейка занята");
				return;
			}
			player = player == "X" ? "0" : "X";
			
			title.innerHTML = `Ходит игрок: ${player}`;
			step++;
			checkWinner();
		}

	}

	function checkWinner() {

		const win = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

		for(i = 0; i < win.length; i++) {
			if(
				blocks[win[i][0]].innerHTML == 'X' && blocks[win[i][1]].innerHTML == 'X' && blocks[win[i][2]].innerHTML == 'X'
			) {
				result = 'Победили крестики!';
				prepareResult(result);
			} else if (
				blocks[win[i][0]].innerHTML == '0' && blocks[win[i][1]].innerHTML == '0' && blocks[win[i][2]].innerHTML == '0'
			) {
				result = 'Победили нолики!';
				prepareResult(result);
			} 
			
		}
		if(step===9) {
			result = 'Победила дружба! :)';
			prepareResult(result);
		}
		
	}
	function prepareResult(result){
		audio.play();
		alert(`${result} Сделано ходов: ${Math.ceil(step/2)} `);
		location.reload();
	}
}

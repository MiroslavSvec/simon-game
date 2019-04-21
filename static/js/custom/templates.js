/* 
Game menu
*/

function game_menu() {
	$("#game-menu").html(`
		<div class="row">
			<div id="new-game" class="col-6 d-flex justify-content-center">
				<div class="pt-5">	
					<i class="fas fa-gamepad fa-3x"></i>
				</div>
			</div>
			<div id="wrapper" class="col-6 d-flex justify-content-center">
				<div class="pt-5">	
					<i class="fas fa-cloud-download-alt fa-3x"></i>
				</div>
			</div>
		</div>
		<div class="row">
			<div id="statistics" class="col-6 d-flex justify-content-center">
				<div class="pb-5 align-self-end">	
					<i class="fas fa-chart-area fa-3x"></i>
				</div>
			</div>
			<div id="settings" class="col-6 d-flex justify-content-center">
				<div class="pb-5 align-self-end">	
					<i class="fas fa-cogs fa-3x"></i>
				</div>
			</div>
		</div>	
	`
	)
	simon_layout();
}

/* 
Game centre
*/

function game_centre_h2() {
	$('#game-centre').html(`
		<div class="align-self-center">
			<h2 class="text-center">
				<b>SIMON </b><i class="fab fa-js-square fa-2x"></i>		
			</h2>
			<hr class="mt-3 mb-4">
			<div class="text-center">
				<button class="btn bg-transparent">
					<i class="fas fa-question fa-4x"></i>
				</button>
			</div>
		</div>
	`)
		.fadeIn(500);
	return false
}


/* 
New game form
*/

function new_game_template() {
	return `
	<form class="row justify-content-center">								
		<div class="form-wrapper align-self-center">
			<div class="row justify-content-end">
				<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
					<i class="fas fa-times fa-4x"></i>
				</button>							
			</div>
			<div class="form-group">
				<input type="text" name="name" class="form-control" placeholder="Profile name">
			</div>
			<div class="form-group">
				<select class="form-control" id="difficulty">
					<option selected="true" value="normal">Normal (10)</option>
					<option value="medium">Medium (15)</option>
					<option value="hard">Hard (20)</option>
				</select>
			</div>
			<div class="form-group form-check">
				<input type="checkbox" class="form-check-input" id="sounds" checked>
				<label class="form-check-label pt-3 pl-4 text-light" for="sounds">Sounds on</label>
			</div>
			<div class="form-group">
				<button onclick="return create_game()" class="btn btn-outline-success btn-lg btn-block" type="submit">Play</button>
			</div>
		</div>
	</form>
	`
}

function no_profiles() {
	$("#game-overlay").html(`
		<div class="wrapper row justify-content-center">
			<div class="align-self-center">
				<div class="row justify-content-end">
					<button onclick="return hide_overlay('#game-overlay')" class="btn bg-transparent">
						<i class="fas fa-times fa-4x"></i>
					</button>							
				</div>
				<h3 class="text-center">No profiles found!</h3>	
				<hr>
				<div class="row justify-content-center">
					<h4 class="text-center"> Create one now? </h4>
				</div>
				<div class="row justify-content-center">
					<div class="pt-3">	
						<button onclick="return new_game()" class="btn bg-transparent"><i class="fas fa-gamepad fa-3x"></i></button>
					</div>
				</div>
			</div>
		</div>
	`)
	simon_layout()
	$("#game-overlay").fadeIn(500)
}
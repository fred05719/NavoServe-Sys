<!-- Start popup dialog box -->
<div class="modal fade" id="event_entry_modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title event_modal_title" id="modalLabel"></h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close_modal_event"></button>
				</div>
				<div class="modal-body">
					<span class="event_id_update d-none"></span>
					<form method="POST" id="event_form">
						<div class="row">
							<div class="col-sm-12">
								<div class="form">
									<select class="form-select choice-box" name="event_name" id="event_name" aria-label="Default select example"  tabindex="1">
										<option value="" disabled selected>--Select social service--</option>
										<option value="0xFF99D1E9">Medical Assistance</option>
										<option value="0xFF9391C9">Educational Assistance</option>
										<option value="0xFFEEE0D0">Financial Assistance</option>
										<option value="0xFFEEB4A7">Burial Assistance</option> 
										<option value="0xFFBBA0CB">NavoGift</option> 
										<option value="0xFFD2DAB1">Issuance of IDs for Senior Citizen</option> 
										<option value="0xFFDBC9A8">Issuance of IDs for PWD</option> 
									</select>
									<label for="user_type" class="select_label"><span class="label_span">Social Service</span></label>
									<div class="icon_label"><i class='bx bxs-cog'></i></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="form">
									<input type="number" name="max_appl" class="form-control text-box" id="max_appl" placeholder=" " tabindex="2" min="1">
									<label for="last_name" class="input_label"><span class="label_span">Max Applicant</span></label>
									<div class="icon_label"><i class="bi bi-list-ol"></i></div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="form">
									<input type="date" name="event-date" class="form-control text-box" id="event-date" placeholder=" " tabindex="3">
									<label for="event-date" class="input_label"><span class="label_span">Date</span></label>
									<div class="icon_label"><i class='bx bxs-calendar'></i></div>
								</div>
							</div>
						</div>
						<div class="row gx-2">
							<div class="col-sm-6">
								<div class="form">
									<input type="time" name="event-start-time" class="form-control text-box" id="event-start-time" placeholder=" " tabindex="4">
									<label for="event-start-time" class="input_label"><span class="label_span">Start time</span></label>
									<div class="icon_label"><i class='bx bxs-calendar'></i></div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form">
									<input type="time" name="event-end-time" class="form-control text-box" id="event-end-time" placeholder=" " tabindex="1">
									<label for="event-end-time" class="input_label"><span class="label_span">End time</span></label>
									<div class="icon_label"><i class='bx bxs-calendar'></i></div>
								</div>
							</div>
						</div>
						<!-- <div class="row">
							<div class="col-sm-12">
								<div class="form">
									<select class="form-select choice-box" name="event_repeat" id="event_repeat" aria-label="Default select example"  tabindex="7">
										<option value="ONE-TIME">One time event</option>
										<option value="DAILY">Daily</option>
										<option value="WEEKLY">Weekly</option>
										<option value="MONTHLY">Monthly</option> 
										<option value="WEEKDAYS">Weekdays</option> 
									</select>
									<label for="user_type" class="select_label"><span class="label_span">Repeat</span></label>
									<div class="icon_label"><i class='bx bxs-cog'></i></div>
								</div>
							</div>
						</div> -->
					</form>	
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-success" id="save_event">Add event</button>
					<button type="button" class="btn btn-success" id="update_event">Update event</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End popup dialog box -->
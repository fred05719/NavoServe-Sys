<!-- Start popup dialog box -->
<div class="modal fade" id="view_socser_modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel"
		aria-hidden="true">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modalLabel"><span class="fw-bold me-2">Event ID: </span><span class="socser_id"></span></h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body fs-5">
					<span class="doc_id d-none"></span>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">Social Service: </span><span class="event_title"></span>
					</div>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">Max applicant: </span><span class="max_appl_info"></span>
					</div>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">From: </span><span class="open_date_info"></span>
					</div>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">To: </span><span class="close_date_info"></span>
					</div>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">Applied Applicants: </span><span class="num_applied_info"></span>
					</div>
					<div class="d-flex flex-row">
						<span class="fw-bold me-2">Status: </span><span class="event_status_info"></span>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-success" id="edit_event">Edit Event</button>
					<button type="button" class="btn btn-danger" id="del_event">Delete Event</button>
				</div>
			</div>
		</div>
	</div>
	<!-- End popup dialog box -->
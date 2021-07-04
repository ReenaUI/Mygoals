import React from 'react';
import { Button, Form, Modal, form} from "react-bootstrap";
import $ from "jquery";

class ProfileUpload extends React.Component {
	componentDidMount() {
		$(document).on("click",function(){
			$('.cust-upload input').on("change", function () {
				$('.cust-upload p').text(this.files.length + " file(s) selected");
			});
		});
	}

	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered className="cust-modal ProfileUpload-modal">
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">Profile picture</h3>
				</Modal.Header>
				<form className="cust-upload">
					<input type="file" multiple />
					<p>Drop your image or <strong>upload from computer</strong></p>
				</form>
				<Modal.Footer className="justify-content-center">
				  <Button onClick={this.props.onHide} className="theme-dark-outline__btn cust-cancel-btn">Cancel</Button>
				  <Button className="theme-dark__btn cust-save-btn">Save</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ProfileUpload;
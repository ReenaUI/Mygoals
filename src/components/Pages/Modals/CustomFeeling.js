import React from 'react'
import { Button,Form, Modal } from "react-bootstrap";
import EmogisSet from "../../../images/emogis-set.png";

class CustomFeeling extends React.Component {
	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered className="cust-modal" >
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">Custom Feeling</h3>
				</Modal.Header>
			
				<div className="select-emojis-wrap">
					<h3>Select emoji</h3>
					<div className="emogis-wrap">
						<div className="emogis-set">
							<img src={EmogisSet} alt="Emogis Set" />
						</div>
					</div>
		
					<h4>Write your feeling:</h4>
					<Form.Group controlId="inputfeeling">
						<Form.Control type="text" placeholder="Fill in... (max 12 characters)"/>
					</Form.Group>
					
					<div className="link-btn-wrap">
						<Button onClick={this.props.onHide} className="theme-dark-outline__btn">Close</Button>

						<Button className="theme-dark__btn">Save</Button>
					</div>
				</div>
		
			</Modal>
		);
	}
}

export default CustomFeeling;
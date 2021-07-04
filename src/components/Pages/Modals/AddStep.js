import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import $ from "jquery";

class AddStep extends React.Component {
	componentDidMount() {
		$(document).on("click", ".counter-step-one-next", function () {
			$(".counter-step-two").show();
			$(".counter-step-one").hide();

		});

		$(document).on("click", ".counter-step-two-back", function () {
			$(".counter-step-one").show();
			$(".counter-step-two").hide();
		});

		$(document).on("click", ".edit-ico", function () {
			$(".edit-title").removeAttr("readOnly");
			// $(this).parent().find('counter').toggleClass('disabled-counter');
		});
	}

	render() {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered className="cust-modal">
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">Add Step</h3>
				</Modal.Header>

				<div className="counter-block counter-step-one">
					<div className="countersteps-wrap">
						<span className="counter">1</span>
						<Form.Group>
							<Form.Label>
								Write a step
						</Form.Label>
							<Form.Control type="text" placeholder="Fill in.." />
						</Form.Group>
						<div className="link-btn-wrap">
							<Button onClick={this.props.onHide} className="theme-dark-outline__btn">cancel</Button>
							<Button className="theme-dark-outline__btn counter-step-one-next">Next step</Button>
							<Button className="theme-dark__btn">finish</Button>
						</div>
					</div>

				</div>

				<div className="counter-block counter-step-two">
					<div className="countersteps-wrap">
						<span className="counter disabled-counter">1</span>
						<Form.Group className="edit-form-group">
							<Form.Control type="text" className="edit-title" placeholder="I'll write a book" readOnly />
							{/* <span className="edit-title">I'll write a book</span> */}
							<Button className="edit-ico override-btn"></Button>
						</Form.Group>
					</div>
					<div className="countersteps-wrap">
						<span className="counter">2</span>
						<Form.Group>
							<Form.Label>
								Write a step
							</Form.Label>
							<Form.Control type="text" placeholder="Fill in.." />
						</Form.Group>
						<div className="link-btn-wrap">
							<Button className="theme-dark-outline__btn counter-step-two-back">cancel</Button>
							<Button className="theme-dark-outline__btn">Next step</Button>
							<Button className="theme-dark__btn">finish</Button>
						</div>
					</div>

				</div>

			</Modal>
		);
	}
}

export default AddStep;
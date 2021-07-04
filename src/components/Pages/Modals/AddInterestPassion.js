import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import $ from "jquery";

class AddInterestPassion extends React.Component {
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

	constructor() {
		super();
		this.state = {
			AddInterestCheckboxData: [{
				id: 1,
				value: 1,
				CustID:"addinterest-checkbox-1",
				labelText: 'Art'
			},
			{
				id: 2,
				value: 2,
				CustID:"addinterest-checkbox-2",
				labelText: 'Books'
			},
			{
				id: 3,
				value: 3,
				CustID:"addinterest-checkbox-3",
				labelText: 'Business'
			},
			{
				id: 4,
				value: 4,
				CustID:"addinterest-checkbox-4",
				labelText: 'Career'
			},
			{
				id: 5,
				value: 5,
				CustID:"addinterest-checkbox-5",
				labelText: 'Cooking'
			
			},
			{
				id: 6,
				value: 6,
				CustID:"addinterest-checkbox-6",
				labelText: 'Educations'
			
			},
			{
				id: 7,
				value: 7,
				CustID:"addinterest-checkbox-7",
				labelText: 'Events'
			
			},
			{
				id: 8,
				value: 8,
				CustID:"addinterest-checkbox-8",
				labelText: 'Family'
			},
			{
				id: 9,
				value: 9,
				CustID:"addinterest-checkbox-9",
				labelText: 'Finance'
			},
			{
				id: 10,
				value: 10,
				CustID:"addinterest-checkbox-10",
				labelText: 'Food & Drink'
			},
			{
				id: 11,
				value: 11,
				CustID:"addinterest-checkbox-11",
				labelText: 'Health & Fitness'
			},
			{
				id: 12,
				value: 12,
				CustID:"addinterest-checkbox-12",
				labelText: 'Hobbies'
			},
			{
				id: 13,
				value: 13,
				CustID:"addinterest-checkbox-13",
				labelText: 'Home & Garden'
			},
			{
				id: 14,
				value: 14,
				CustID:"addinterest-checkbox-14",
				labelText: 'Music'
			},
			{
				id: 15,
				value: 15,
				CustID:"addinterest-checkbox-15",
				labelText: 'Pets'
			},
			{
				id: 16,
				value: 16,
				CustID:"addinterest-checkbox-16",
				labelText: 'Sports'
			},
			{
				id: 17,
				value: 17,
				CustID:"addinterest-checkbox-17",
				labelText: 'Travel'
			}]
		}
	}

	render() {
		const { AddInterestCheckboxData } = this.state;
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered className="cust-modal multiselectcheck-modal addinterest-modal">
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">Add interests and passions</h3>
				</Modal.Header>

				<div className="multiselectcheck-modal-body">
					<Form className="multiselectcheck-modal-Form">
						{
							AddInterestCheckboxData.map((AddInterestCheckboxData) => {
								return (
									<div key={AddInterestCheckboxData.id} className="custom-checkbox">
										{['checkbox'].map((type) => (
											<div key={`custom-${type}`}>
												<Form.Check
													custom
													type={type}
													id={`${AddInterestCheckboxData.CustID}`}
													label={`${AddInterestCheckboxData.labelText}`}
													value={`${AddInterestCheckboxData.value}`}
												/>
											</div>
										))}
									</div>
								)
							})
						}

					<Form.Group controlId="custom" className="custom-field-add">
							<Form.Control type="text" placeholder="+ Custom" />
						</Form.Group>
					</Form>
				</div>

				<Modal.Footer className="justify-content-center">
				  <Button onClick={this.props.onHide} className="theme-dark-outline__btn cust-cancel-btn">Cancel</Button>
				  <Button className="theme-dark__btn cust-save-btn">Save</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default AddInterestPassion;
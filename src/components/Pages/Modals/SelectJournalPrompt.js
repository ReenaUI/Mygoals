import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import $ from "jquery";

class SelectJournalPrompt extends React.Component {
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
			CheckboxData: [{
				id: 1,
				value: 1,
				labelText: 'What’s on your mind?'
			},
			{
				id: 2,
				value: 2,
				labelText: 'What did you achieve today?'
			},
			{
				id: 3,
				value: 3,
				labelText: 'Describe how you’re feeling both physically and emotionally'
			},
			{
				id: 4,
				value: 4,
				labelText: 'What brings you joy?'
			},
			{
				id: 5,
				value: 5,
				labelText: 'What does your dream life look like?'
			
			},
			{
				id: 6,
				value: 6,
				labelText: 'What is one thing that you’d like to be different by this time next year?'
			
			},
			{
				id: 7,
				value: 7,
				labelText: 'List five traits that you love about yourself?'
			
			},
			{
				id: 8,
				value: 8,
				labelText: 'How are you currently sabotaging your goals?'
			},
			{
				id: 9,
				value: 9,
				labelText: 'What are you interested in learning more about?'
			},
			{
				id: 10,
				value: 10,
				labelText: 'List five habits that you want to include in your daily routine'
			},
			{
				id: 11,
				value: 11,
				labelText: 'What make you happy?'
			},
			{
				id: 12,
				value: 12,
				labelText: 'What is bothering you right now?'
			}]
		}
	}

	render() {
		const { CheckboxData } = this.state;
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered className="cust-modal multiselectcheck-modal journal-modal">
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">select your journal prompt</h3>
				</Modal.Header>

				<div className="multiselectcheck-modal-body">
					<Form className="multiselectcheck-modal-Form">
						{
							CheckboxData.map((CheckboxData) => {
								return (
									<div key={CheckboxData.id} className="custom-checkbox">
										{['checkbox'].map((type) => (
											<div key={`custom-${type}`}>
												<Form.Check
													custom
													type={type}
													id={`${CheckboxData.id}`}
													label={`${CheckboxData.labelText}`}
													value={`${CheckboxData.value}`}
												/>
											</div>
										))}
									</div>
								)
							})
						}
					</Form>
				</div>

				<Modal.Footer className="justify-content-center">
				  <Button onClick={this.props.onHide} className="theme-dark-outline__btn cust-cancel-btn">cancel</Button>
				  <Button className="theme-dark__btn cust-save-btn">select</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default SelectJournalPrompt;
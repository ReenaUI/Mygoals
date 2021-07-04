import React from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import $ from "jquery";

class AddValues extends React.Component {
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
			AddvaluesCheckboxData: [{
				id: 1,
				value: 1,
				CustID: 'addvalues-check-1',
				labelText: 'Accountability'
			},
			{
				id: 2,
				value: 2,
				CustID: 'addvalues-check-2',
				labelText: 'Adventure'
			},
			{
				id: 3,
				value: 3,
				CustID: 'addvalues-check-3',
				labelText: 'Authenticity'
			},
			{
				id: 4,
				value: 4,
				CustID: 'addvalues-check-4',
				labelText: 'Balance'
			},
			{
				id: 5,
				value: 5,
				CustID: 'addvalues-check-5',
				labelText: 'Career'
			
			},
			{
				id: 6,
				value: 6,
				CustID: 'addvalues-check-6',
				labelText: 'Caring'
			
			},
			{
				id: 7,
				value: 7,
				CustID: 'addvalues-check-7',
				labelText: 'Collaboration'
			
			},
			{
				id: 8,
				value: 8,
				CustID: 'addvalues-check-8',
				labelText: 'Commitment'
			},
			{
				id: 9,
				value: 9,
				CustID: 'addvalues-check-9',
				labelText: 'Community'
			},
			{
				id: 10,
				value: 10,
				CustID: 'addvalues-check-10',
				labelText: 'Compassion'
			},
			{
				id: 11,
				value: 11,
				CustID: 'addvalues-check-11',
				labelText: 'Courage'
			},
			{
				id: 12,
				value: 12,
				CustID: 'addvalues-check-12',
				labelText: 'Creativity'
			},
			{
				id: 13,
				value: 13,
				CustID: 'addvalues-check-13',
				labelText: 'Diversity'
			},
			{
				id: 14,
				value: 14,
				CustID: 'addvalues-check-14',
				labelText: 'Empathy'
			},
			{
				id: 15,
				value: 15,
				CustID: 'addvalues-check-15',
				labelText: 'Environment'
			},
			{
				id: 16,
				value: 16,
				CustID: 'addvalues-check-16',
				labelText: 'Equality'
			},
			{
				id: 17,
				value: 17,
				CustID: 'addvalues-check-17',
				labelText: 'Excellence'
			},
			{
				id: 18,
				value: 18,
				CustID: 'addvalues-check-18',
				labelText: 'Faith'
			},
			{
				id: 19,
				value: 19,
				CustID: 'addvalues-check-19',
				labelText: 'Family'
			},
			{
				id: 20,
				value: 20,
				CustID: 'addvalues-check-20',
				labelText: 'Friendship'
			},
			{
				id: 21,
				value: 21,
				CustID: 'addvalues-check-21',
				labelText: 'Fun'
			},
			{
				id: 22,
				value: 22,
				CustID: 'addvalues-check-22',
				labelText: 'Generosity'
			},
			{
				id: 23,
				value: 23,
				CustID: 'addvalues-check-23',
				labelText: 'Gratitude'
			},
			{
				id: 24,
				value: 24,
				CustID: 'addvalues-check-24',
				labelText: 'Growth'
			},
			{
				id: 25,
				value: 25,
				CustID: 'addvalues-check-25',
				labelText: 'Health'
			},
			{
				id: 26,
				value: 26,
				CustID: 'addvalues-check-26',
				labelText: 'Honesty'
			},
			{
				id: 27,
				value: 27,
				CustID: 'addvalues-check-27',
				labelText: 'Independence'
			},
			{
				id: 28,
				value: 28,
				CustID: 'addvalues-check-28',
				labelText: 'Joy'
			},
			{
				id: 29,
				value: 29,
				CustID: 'addvalues-check-29',
				labelText: 'Kindness'
			},
			{
				id: 30,
				value: 30,
				CustID: 'addvalues-check-30',
				labelText: 'Knowledge'
			},
			{
				id: 31,
				value: 31,
				CustID: 'addvalues-check-31',
				labelText: 'Leadership'
			},
			{
				id: 32,
				value: 32,
				CustID: 'addvalues-check-32',
				labelText: 'Learning'
			},
			{
				id: 33,
				value: 33,
				CustID: 'addvalues-check-33',
				labelText: 'Love'
			},
			{
				id: 34,
				value: 34,
				CustID: 'addvalues-check-34',
				labelText: 'Loyalty'
			},
			{
				id: 35,
				value: 35,
				CustID: 'addvalues-check-35',
				labelText: 'Optimism'
			},
			{
				id: 36,
				value: 36,
				CustID: 'addvalues-check-36',
				labelText: 'Parenting'
			},
			{
				id: 37,
				value: 37,
				CustID: 'addvalues-check-37',
				labelText: 'Patience'
			},
			{
				id: 38,
				value: 38,
				CustID: 'addvalues-check-38',
				labelText: 'Perseverance'
			},
			{
				id: 39,
				value: 39,
				CustID: 'addvalues-check-39',
				labelText: 'Pride'
			},
			{
				id: 40,
				value: 40,
				CustID: 'addvalues-check-40',
				labelText: 'Reliability'
			},
			{
				id: 41,
				value: 41,
				CustID: 'addvalues-check-41',
				labelText: 'Respect'
			},
			{
				id: 42,
				value: 42,
				CustID: 'addvalues-check-42',
				labelText: 'Resiliance'
			},
			{
				id: 43,
				value: 43,
				CustID: 'addvalues-check-43',
				labelText: 'Risk Taking'
			},
			{
				id: 44,
				value: 44,
				CustID: 'addvalues-check-44',
				labelText: 'Safety'
			},
			{
				id: 45,
				value: 45,
				CustID: 'addvalues-check-45',
				labelText: 'Self-discipline'
			},
			{
				id: 46,
				value: 46,
				CustID: 'addvalues-check-46',
				labelText: 'Simplicity'
			},
			{
				id: 47,
				value: 47,
				CustID: 'addvalues-check-47',
				labelText: 'Sprituality'
			},
			{
				id: 48,
				value: 48,
				CustID: 'addvalues-check-48',
				labelText: 'Success'
			},
			{
				id: 49,
				value: 49,
				CustID: 'addvalues-check-49',
				labelText: 'Teamwork'
			},
			{
				id: 50,
				value: 50,
				CustID: 'addvalues-check-50',
				labelText: 'Travel'
			},
			{
				id: 51,
				value: 51,
				CustID: 'addvalues-check-51',
				labelText: 'Trust'
			},
			{
				id: 52,
				value: 52,
				CustID: 'addvalues-check-52',
				labelText: 'Understanding'
			},
			{
				id: 53,
				value: 53,
				CustID: 'addvalues-check-53',
				labelText: 'Uniqueness'
			},
			{
				id: 54,
				value: 54,
				CustID: 'addvalues-check-54',
				labelText: 'Vision'
			},
			{
				id: 55,
				value: 55,
				CustID: 'addvalues-check-55',
				labelText: 'Wealth'
			},
			{
				id: 56,
				value: 56,
				CustID: 'addvalues-check-56',
				labelText: 'Well-being'
			},
			{
				id: 57,
				value: 57,
				CustID: 'addvalues-check-57',
				labelText: 'Wisdom'
			}]
		}
	}

	render() {
		const { AddvaluesCheckboxData } = this.state;
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered id="addvalues-modal" className="cust-modal multiselectcheck-modal addvalues-modal">
				<Modal.Header closeButton>
					<h3 className="cust-heading-center">Add values</h3>
				</Modal.Header>

				<div className="multiselectcheck-modal-body">
					<Form className="multiselectcheck-modal-Form">
						{
							AddvaluesCheckboxData.map((AddvaluesCheckboxData) => {
								return (
									<div key={AddvaluesCheckboxData.id} className="custom-checkbox">
										{['checkbox'].map((type) => (
											<div key={`custom-${type}`}>
												<Form.Check
													custom
													type={type}
													id={`${AddvaluesCheckboxData.CustID}`}
													label={`${AddvaluesCheckboxData.labelText}`}
													value={`${AddvaluesCheckboxData.value}`}
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

export default AddValues;
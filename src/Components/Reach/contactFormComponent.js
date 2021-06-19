import React from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
	return (
		<div className="reach-us" id="reach-us">
			<div className="reach-us-heading">
				<p className="reach-us-header">REACH US</p>
			</div>

			<div className="reach-us-desp">
				<div className="reach-us-desp-left">
					<div className="reach-us-desp-left-abt">
						<p>
							Our eagerness to work with you will reflect in our
							<br />
							promptness when you contact us. Do not hesitate to
							<br />
							ask us anything :)
						</p>
					</div>
					<form className="reach-us-cnct-form">
						<div className="reach-us-cnct-form-inp">
							<div className="input">
								<p>Name</p>
								<input required type="text"></input>
							</div>

							<div className="input">
								<p>Email</p>
								<input required type="text"></input>
							</div>

							<div className="input">
								<p>Phone</p>
								<input required type="text"></input>
							</div>

							<div className="input input-text-area">
								<p>Query</p>
								<textarea
									required
									type="text"
									spellcheck="false"
								></textarea>
							</div>
						</div>
						<div className="reach-us-right">
							<div className="submit-btn">
								<button className="reach-us-btn" type="submit">
									<p> Submit</p>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default ContactForm;

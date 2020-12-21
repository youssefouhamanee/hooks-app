import React from "react";
import Modal from "rodal";
import "rodal/lib/rodal.css";
import { ContentModal } from "./StyledComponents";

const ModalRemoveConfirmation = ({
	isVisible,
	onClose,
	removePerson,
	removePersonId,
	animation,
	remModal
}) => {
	return (
		<Modal
			className="remove-item"
			visible={isVisible}
			onClose={onClose}
			animation={animation}
			width={"345"}
			height={"155"}
			ref={remModal}
		>
			<ContentModal>
				<div className="header__modal">
					Do you want remove {removePersonId.name} !
				</div>
				<div className="footer__modal">
					<button className="btn-outline" onClick={onClose}>
						cancel
					</button>
					<button className="btn-danger" onClick={removePerson}>
						remove
					</button>
				</div>
			</ContentModal>
		</Modal>
	);
};
export default ModalRemoveConfirmation;

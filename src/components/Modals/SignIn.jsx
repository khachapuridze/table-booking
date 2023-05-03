import { useState } from 'react';
import Modal from '../../components/Modal';

export default function SignIn(props) {
  const [emailVersion, setEmailVersion] = useState(false)
  return (
    <Modal className="test" show={props.show} hideModal={() => props.hideModal()} >
      <div className="signin-modal">
        <h3 className="signin-modal__title">Enter your phone number</h3>
        <p className="signin-modal__desc">
          You will receive a text message to verify your account. Message & data rates may apply.
        </p>
        <input type="text" placeholder="Phone number" />
        <button className="signin-modal__btn">Continue</button>
        <div className="signin-modal__toggler">Use email instead</div>
      </div>
    </Modal>
  );
}

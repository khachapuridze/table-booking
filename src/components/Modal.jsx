export default function Modal(props) {
  if (!props.show) return null;
  return (
    <div className="modal">
      <div className="modal-bg" onClick={() => props.hideModal()}></div>
      <div className="modal__content">{props.children}</div>
    </div>
  );
}

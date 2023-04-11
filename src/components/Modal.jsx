export default function Modal(props) {
  if (!props.show) return null;
  const showModal = (e) => {
    props.showModal(false);
  };
  return (
    <div className="modal">
      <div className="modal-bg" onClick={showModal}></div>
      <div className="modal__content">{props.children}</div>
    </div>
  );
}

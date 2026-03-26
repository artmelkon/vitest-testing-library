export default function Checkbox({ id, label, onChange }) {
  return (
    <>
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

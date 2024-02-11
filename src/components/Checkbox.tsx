interface Props {
  onChange: (value: boolean) => void;
  label: string;
  isChecked: boolean;
}

export const Checkbox = ({ onChange, label, isChecked }: Props) => {
  console.log(isChecked);
  return (
    <div>
      <input
        type="checkbox"
        className="checked:accent-indigo-600"
        checked={isChecked}
        onChange={event => {
          onChange(event.target.checked);
        }}
      />
      <label className="ms-2 text-base">{label}</label>
    </div>
  );
};

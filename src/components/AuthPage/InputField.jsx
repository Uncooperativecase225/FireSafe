export default function InputField({
  label,
  id,
  type,
  placeholder,
  value,
  onChange
}) {

  return (

    <div className="flex flex-col gap-1">

      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
        border
        rounded-lg
        px-3
        py-2
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400
        "
      />

    </div>
  )
}
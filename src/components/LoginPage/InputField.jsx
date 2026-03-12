export default function InputField({
  label,
  type,
  placeholder,
  icon: Icon
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div
        className="
        flex
        items-center
        border
        rounded-lg
        px-3
        py-2
        focus-within:ring-2
        focus-within:ring-cyan-400
        transition
        "
      >
        <Icon className="text-gray-400 mr-2" />

        <input
          type={type}
          placeholder={placeholder}
          className="
          w-full
          outline-none
          bg-transparent
          "
        />
      </div>
    </div>
  );
}
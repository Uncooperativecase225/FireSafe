export default function Divider() {
  return (
    <div className="flex items-center w-full">
      <div className="grow border-t"></div>

      <span className="mx-3 text-sm text-gray-500">
        or
      </span>

      <div className="grow border-t"></div>
    </div>
  );
}
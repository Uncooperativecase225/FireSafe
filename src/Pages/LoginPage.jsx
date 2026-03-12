import TopBar from "../components/LoginPage/Topbar";
import AuthCard from "../components/LoginPage/AuthCard";

export default function LoginPage() {
  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      bg-linear-to-br
      from-gray-100
      to-gray-200
      "
    >
      <TopBar />

      <div
        className="
        flex
        flex-1
        items-center
        justify-center
        px-4
        "
      >
        <AuthCard />
      </div>
    </div>
  );
}
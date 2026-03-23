import Topbar from "../components/AuthPage/Topbar";
import AuthContainer from "../components/AuthPage/AuthContainer";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-100 to-gray-200">

      {/* Top Branding Bar */}
      <Topbar />

      {/* Authentication Container */}
      <div className="flex flex-1 items-center justify-center px-4">
        <AuthContainer />
      </div>

    </div>
  );

}
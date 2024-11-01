import LoginForm from "@/components/login-form";
import { login } from "@/lib/auth/auth";

const formData = {
  email: "",
  password: "",
};

const Login = async () => {
  const handleLogin = async (formData) => {
    "use server";
    try {
      const response = await login(formData);
      if (response.success) {
        console.error("Login successful", response.data);
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-3 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Login to Your Account
        </h1>
        <LoginForm initialFormData={formData} onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;

import LoginForm from "@/components/login-form";

const formData = {
  email: "",
  password: "",
};

const Login = async () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-3 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">
          Login to Your Account
        </h1>
        <LoginForm initialFormData={formData}  />
      </div>
    </div>
  );
};

export default Login;

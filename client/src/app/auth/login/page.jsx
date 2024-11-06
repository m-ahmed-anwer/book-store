import LoginForm from "@/components/login-form";


const formData = {
  email: "",
  password: "",
};

const Login = async () => {
  const handleLogin = async (formData) => {
    "use server";
    try {
      const response = await fetch(`http://localhost:3000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Login successful", result.data);
      } else {
        console.error(result.message);
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

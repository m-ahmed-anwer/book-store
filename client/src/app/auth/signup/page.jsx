import SignupForm from "@/components/signup-form";

const formData = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const handleSignup = async (formData) => {
    "use server";
    try {
      const response = await fetch(`http://localhost:3000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Signup successful", result.data);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Signup failed", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-3 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <SignupForm initialFormData={formData} onSubmit={handleSignup} />
      </div>
    </div>
  );
};

export default Signup;

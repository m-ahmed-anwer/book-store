import SignupForm from "@/components/signup-form";

const formData = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-3 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>
        <SignupForm initialFormData={formData} />
      </div>
    </div>
  );
};

export default Signup;

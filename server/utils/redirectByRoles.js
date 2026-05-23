export const redirectByRole = (role, navigate) => {
  if (role === "employer") return navigate("/employer/dashboard");
  if (role === "admin") return navigate("/admin");
  return navigate("/jobs");
};

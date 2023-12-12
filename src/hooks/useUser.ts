export const useUserData = (user: Record<string, string>[]) => {
  const jobDescription = user.find((el) => "employer" in el);
  const personalData = user.find((el) => "email" in el);
  const { description } = jobDescription!;
  return {
    jobDescription,
    personalData,
    description,
  };
};

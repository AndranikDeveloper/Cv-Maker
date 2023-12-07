import { useForm } from "react-hook-form";

export const Information = () => {
  const { register } = useForm({
    defaultValues: {
      referenceInfo: []
    },
  });
  return <div>index</div>;
};

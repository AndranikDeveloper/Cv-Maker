import { useForm } from 'react-hook-form';
import { additionalInfo } from '../../utils/information-services';

export const Information = () => {
  const { register } = useForm({
    defaultValues: {
      referenceInfo: [],
    },
  });

  return (
    <div>
      <div>
        {additionalInfo.map(
          ({ component, name, styles, placeholder, title, sectionName }) =>
            component({
              register,
              name,
              styles,
              placeholder,
              title,
              sectionName,
            })
        )}
      </div>
    </div>
  );
};

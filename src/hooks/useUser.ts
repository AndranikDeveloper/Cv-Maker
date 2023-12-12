import { currentDate, monthsArray, year } from '../utils/select-services';

export const useUserData = (user: Record<string, string>[]) => {
  const isEmpty = [];
  const jobDescription = user.find((el) => 'employer' in el);
  const personalData = user.find((el) => 'email' in el);
  const { description } = jobDescription!;

  const started = jobDescription!.startDate + ' ' + jobDescription!.startYear;
  const ended = jobDescription!.endDate + ' ' + jobDescription!.endYear;
  const defaultDate =
    monthsArray[currentDate] === started.split(' ')[0] &&
    year === +started.split(' ')[1];

  const defaultYearDate =
    monthsArray[currentDate] === ended.split(' ')[0] &&
    year === +ended.split(' ')[1];

  // ----------EDUCATION-----------------------------------------------------------------------

  const educationData = user.find((el) => 'school' in el);

  const startEducation =
    educationData!.startEducationDate + ' ' + educationData!.startEducationYear;
  const endEducation =
    educationData!.endEducationDate + ' ' + educationData!.endEducationYear;

  const defaultEducationDate =
    monthsArray[currentDate] === startEducation.split(' ')[0] &&
    year === +startEducation.split(' ');

  const defaultYearEducationDate =
    endEducation.split(' ')[0] && year === +endEducation.split(' ');

  const {
    school,
    degree,
    startEducationDate,
    startEducationYear,
    endEducationDate,
    endEducationYear,
    subject,
  } = educationData!;

  for (const key in educationData) {
    if (educationData[key].trim() === '') isEmpty.push(false);
    else isEmpty.push(true);
  }

  return {
    jobDescription,
    personalData,
    description,
    ended,
    defaultDate,
    started,
    school,
    degree,
    startEducationDate,
    startEducationYear,
    endEducationDate,
    endEducationYear,
    isEmpty,
    subject,
    defaultYearDate,
    defaultEducationDate,
    defaultYearEducationDate,
  };
};

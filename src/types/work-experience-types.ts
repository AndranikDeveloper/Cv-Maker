export interface IWorkExperienceInitialState {
  userWorks: IUserWorks | null;
}

export interface IUserWorks {
  employer: string;
  startDate: { month: string; year: number };
  endDate: { month: string; year: number };
  jobTitle: string;
  location: string;
  description: string;
}

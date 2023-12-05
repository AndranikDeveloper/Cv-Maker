export interface IStepsInitialState {
  step: number;
}
export interface ISteps {
  title: string;
  count: number;
  component: React.ReactNode;
  path: string;
}

export interface IStepsStyledProps {
  $isCurrent: boolean;
}

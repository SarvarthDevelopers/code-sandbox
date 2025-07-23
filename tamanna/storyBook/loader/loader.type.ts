export type LoaderSize = 'small' | 'regular' | 'large' | 'xlarge';

export interface LoaderProps {
  size?: LoaderSize;
  label?: string;
  showLabel?: boolean;
  showBG?: boolean;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  helperText?: string;
  state?: 'default' | 'focused' | 'typing' | 'active' | 'disabled';
  destructive?: boolean;
}
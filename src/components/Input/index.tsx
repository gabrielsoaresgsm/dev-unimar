import { styled } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white'
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rgba(140, 48, 244, 1)'
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'rgba(140, 48, 244, 1)'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#56178C'
    },
    '&:hover fieldset': {
      borderColor: '#56178C'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#56178C'
    }
  }
});

export const Input: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledInput
      {...props}
      fullWidth
      InputLabelProps={{
        sx: {
          color: 'white'
        }
      }}
      InputProps={{
        sx: {
          color: 'white'
        }
      }}
    />
  );
};

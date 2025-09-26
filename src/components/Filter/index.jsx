import React from 'react';
import { FlexBox } from '../../style';
import { Button, Checkbox, FormControlLabel } from '@mui/material';

function Filter({ filters, onChange }) {
  const handleCheckbox = (name) => (event) => {
    onChange(name, event.target.checked);
  };

  const checkboxSx = {
    color: '#ccc',
    '&.Mui-checked': { color: '#fff' },
    padding: 0,
    transform: 'scale(0.8)',
  };

  const labelSx = {
    fontSize: '12px',
    color: '#fff',
  };

  return (
    <FlexBox style={{ justifyContent: 'space-between', alignItems: 'center', margin: '0 20px' }}>
      <FlexBox style={{gap: '10px', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: '#fff', marginRight: '10px' }}>Pricing Options</div>

        <FormControlLabel
          control={<Checkbox checked={filters.paid} onChange={handleCheckbox('paid')} sx={checkboxSx} />}
          label="Paid"
          sx={{ '& .MuiFormControlLabel-label': labelSx }}
        />
        <FormControlLabel
          control={<Checkbox checked={filters.free} onChange={handleCheckbox('free')} sx={checkboxSx} />}
          label="Free"
          sx={{ '& .MuiFormControlLabel-label': labelSx }}
        />
        <FormControlLabel
          control={<Checkbox checked={filters.viewOnly} onChange={handleCheckbox('viewOnly')} sx={checkboxSx} />}
          label="View only"
          sx={{ '& .MuiFormControlLabel-label': labelSx }}
        />
      </FlexBox>

      <Button
        type="text"
        sx={{ color: '#fff' }}
        onClick={() => onChange('paid', false) || onChange('free', false) || onChange('viewOnly', false)}
      >
        Reset
      </Button>
    </FlexBox>
  );
}

export default Filter;

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectArea = ({ handleChange, area }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="choose-area-label">Choose area...</InputLabel>
        <Select
          variant="standard"
          labelId="choose-area-label"
          id="choose-area-select"
          value={area}
          label="Area"
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="Jerusalem, Israel">Jerusalem, Israel</MenuItem>
          <MenuItem value="Spain, Madrid">Spain, Madrid</MenuItem>
          <MenuItem value="Paris, France">Paris, France</MenuItem>
          <MenuItem value="Buenos Aires, Argentina">
            Buenos Aires, Argentina
          </MenuItem>
          <MenuItem value="Bangkok, Thailand">Bangkok, Thailand</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectArea;

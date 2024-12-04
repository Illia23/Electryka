import { Tab, Tabs, Box } from "@mui/material"
import { useState } from "react";
const Header = () => {
     const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
       <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Servises" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  )
}

export default Header
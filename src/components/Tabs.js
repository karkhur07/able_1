import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Internship Description" {...a11yProps(0)} />
          <Tab label="Qualification" {...a11yProps(1)} />
          <Tab label="About The Company" {...a11yProps(2)} />
          <Tab label="Rating" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ul className= 'm-4'>
                <li className='pb-5'><a href="/"><b>Experience:</b> Freshers</a></li>
                <li className='pb-5'><a href="/"><b>Stipend:</b> Rs 8,000/Month</a></li>
                <li className='pb-5'><a href="/"><b>Location:</b> Banglore(Hybrid)</a></li>
                <li className='pb-5'><a href="/"><b>Role:</b> Month</a></li>
                <li className='pb-5'><a href="/"><b>Industry Type:</b> Education</a></li>
          </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <ul className= 'm-4'>
                <li className='pb-5'><p>Stakeholder Management / Client Relationship / Vendor Management Experience <br/>- 0 to 1</p></li>
                <li className='pb-5'><p>Fresh MBA Grads Welcomed / Bachelors in Business Administration, Business <br/>Management <br/>Or related Fields with 6 months of proven Skills or Portfolio.</p></li>
                <li className='pb-5'><p>Excellent communication , prsentation, and organizational skills.</p></li>
                <li className='pb-5'><p>Proficiency in Microsoft Office Suite (Word , PowerPoint, Outlook, & Excel )and <br/>Google Docs.</p></li>
                <li className='pb-5'><p>Professionalism , Corporate_Email, Strategic Thinking with negotiating Skills</p></li>
          </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <p>Accenture is a global professional services company with leading capabilities in digital, cloud and security.Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services, and Accenture Song— all powered by the world’s largest network of Advanced Technology and Intelligent Operations centers. Our 699,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create value and shared success for our clients, people, shareholders, partners and communities.Visit us at www.accenture.com</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <ul className= 'm-4'>
                <li className='pb-5'><p>3.8 Stars <br/>based on 1.5K Reviews</p></li>
                <li className='pb-5'><p>Top Rated Tech Startup - 2024</p></li>
                <li className='pb-5'><p>Top Rated Internet / Product Company - <br/>2024</p></li>
          </ul>
      </CustomTabPanel>
    </Box>
  );
}

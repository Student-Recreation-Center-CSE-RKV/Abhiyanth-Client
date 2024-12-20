import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CelebrationIcon from '@mui/icons-material/Celebration';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CalculateIcon from '@mui/icons-material/Calculate';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import GroupsIcon from '@mui/icons-material/Groups';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import CampaignIcon from '@mui/icons-material/Campaign';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const NAVIGATION = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Event',
    title: 'Event Management',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        Kind: 'header',
        title: 'Non-Technical',
      },
      {
        segment: 'Stalls',
        title: 'Stalls',
        icon: <StorefrontIcon color='secondary' />,
      },
      {
        segment: 'Sports',
        title: 'Sports',
        icon: <SportsVolleyballIcon color='secondary' />,
      },
      {
        segment: 'Cultural show',
        title: 'Cultural show',
        icon: <NightlifeIcon color='secondary' />,
      },
      {
        segment: 'Curtain Raiser',
        title: 'Curtain Raiser Events',
        icon: <SportsScoreIcon color='secondary' />,
      },
      {
        Kind: 'header',
        title: 'Technical',
        
      },
      {
        segment: 'Workshops',
        title: 'Workshops',
        icon:<PhonelinkIcon color="secondary"/>,
        
      },
      {
        segment: 'Hackathons',
        title: 'Hackathons',
        icon:<PhonelinkIcon color="secondary"/>,
        
      },
      {
        segment: 'Tech talk Shows',
        title: 'Tech Talks Shows',
        icon:<CampaignIcon color="secondary"/>,
        
      },
      {
        segment: 'Project Expo',
        title: 'Project Expo',
        icon:<TipsAndUpdatesIcon color="secondary"/>,
      },
    ],
  },
  {
    segment: 'Finance Management',
    title: 'Finance Management',
    icon: <AccountBalanceIcon color='secondary' />,
    children: [
      {
        segment: 'Sponsor Funds',
        title: 'Sponsor Funds',
        icon: <CurrencyRupeeIcon color='secondary' />,
      },
      {
        segment: 'Expenditure',
        title: 'Expenses',
        icon: <CalculateIcon color='secondary' />,
      },
      {
        segment: 'Amount Generated',
        title: 'Amount Generated',
        icon: <AssuredWorkloadIcon color='secondary' />,
      },
    ],
  },
  {
    segment: 'Abhiyanth core Team',
    title: 'Abhiyanth Core Team',
    icon: <GroupsIcon color='secondary' />,
    children: [
      {
        segment: 'Core Team',
        title: 'Core Team',
      },
      {
        segment: 'Sub Core Team',
        title: 'Sub Core Team',
      },
      {
        segment: 'Event Heads',
        title: 'Event Heads',
      },
      {
        segment: 'Faculty Coordinators',
        title: 'Faculty Coordinators',
      },
    ],
  },
  {
    segment: 'Franchise Management',
    title: 'Franchise Management',
    icon :<AcUnitIcon color='secondary'/>,
    children: [
      {
        segment: 'Logos',
        title: 'Logos',
      },
      {
        segment: 'Id Cards',
        title: 'Id Cards',
      },
      {
        segment: 'Certificates',
        title: 'Certificates',
      },
    ],
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    secondary: {
      main: '#f50057', // You can change this to your desired secondary color
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function ToolbarActionsCalendar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>
      <Tooltip title="Event Calendar">
        <IconButton onClick={() =>navigate('/event-calendar')}>
          <CalendarMonthIcon />
        </IconButton>
      </Tooltip>
      <ThemeSwitcher />
    </Box>
  );
}
function NavBarLayout(props) {

  const [session, setSession] = React.useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = useDemoRouter('/dashboard');
  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
      logo: <img src="https://mui.com/static/logo.png" alt="Abhiyanth logo" />,
      title: 'ABHIYANTH',
      }}
      
    >
      <DashboardLayout
      slots={{
      toolbarActions: ToolbarActionsCalendar, 
      }}>
      <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

NavBarLayout.propTypes = {
  window: PropTypes.func,
};

export default NavBarLayout;

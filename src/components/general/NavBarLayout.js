import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme,ThemeProvider } from '@mui/material/styles';
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
    segment: 'Dashboard',
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
        segment: 'Events',
        title: 'Events',
        icon: <NightlifeIcon color='secondary' />,
      },
      {
        segment: 'CurtainRaiser',
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
        segment: 'TechTalkShows',
        title: 'Tech Talks Shows',
        icon:<CampaignIcon color="secondary"/>,
        
      },
      {
        segment: 'ProjectExpo',
        title: 'Project Expo',
        icon:<TipsAndUpdatesIcon color="secondary"/>,
      },
    ],
  },
  {
    segment: 'FinanceManagement',
    title: 'Finance Management',
    icon: <AccountBalanceIcon color='secondary' />,
    children: [
      {
        segment: 'SponsorFunds',
        title: 'Sponsor Funds',
        icon: <CurrencyRupeeIcon color='secondary' />,
      },
      {
        segment: 'Expenditure',
        title: 'Expenses',
        icon: <CalculateIcon color='secondary' />,
      },
      {
        segment: 'AmountGenerated',
        title: 'Amount Generated',
        icon: <AssuredWorkloadIcon color='secondary' />,
      },
    ],
  },
  {
    segment: 'AbhiyanthCoreTeam',
    title: 'Abhiyanth Core Team',
    icon: <GroupsIcon color='secondary' />,
    children: [
      {
        segment: 'CoreTeam',
        title: 'Core Team',
      },
      {
        segment: 'SubCoreTeam',
        title: 'Sub Core Team',
      },
      {
        segment: 'EventHeads',
        title: 'Event Heads',
      },
      {
        segment: 'FacultyCoordinators',
        title: 'Faculty Coordinators',
      },
    ],
  },
  {
    segment: 'FranchiseManagement',
    title: 'Franchise Management',
    icon :<AcUnitIcon color='secondary'/>,
    children: [
      {
        segment: 'Logos',
        title: 'Logos',
      },
      {
        segment: 'IdCards',
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
      main: '#f50057',
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        px: 2, // Optional padding on the sides
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.default', // Use the theme's background color
        color: 'text.primary', // Use the theme's text color
        minHeight: 'calc(100vh - 64px)', // Ensure it covers the full height minus header
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard content for {pathname}
      </Typography>
      <Typography>
        This is a demo page. Customize this content as per your requirements.
      </Typography>
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
    <ThemeProvider theme={demoTheme}>
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
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

NavBarLayout.propTypes = {
  window: PropTypes.func,
};

export default NavBarLayout;

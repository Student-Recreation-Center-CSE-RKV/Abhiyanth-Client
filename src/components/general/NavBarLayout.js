import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CelebrationIcon from '@mui/icons-material/Celebration';
import { useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useEffect } from 'react';
import ImageUploader from '../../components/admin/sponsers/sponsersAdmin';
import ManageEventsByAdmin from '../admin/ManageEventsByAdmin';
import DepartmentCarouselImageUploader from '../admin/technical/DepartmentImageUpload';
import AddTechnicalEvent from '../admin/technical/addNewTechnicalEvent';
import AddVolunteer from '../admin/volunteer/addVolunteer';
import AllVolunteers from '../admin/volunteer/allVolunteers';
import AllTechnicalEvents from '../admin/technical/allTechnicalEvents';
import { AddNewStall } from "../admin/stalls/addNewStall.js"
import StallsDisplay from '../admin/stalls/getAllStalls.js';
import { auth } from '../../api/firebaseConfig.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NAVIGATION = [
  {
    segment: 'Dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'Culturals',
    title: 'Events',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        segment: 'addEvent',
        title: 'Add Event',
      }
    ],
  },
  {
    segment: 'TechnicalEvents',
    title: 'Technical Events',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        segment: 'addEvent',
        title: 'Add Event',
      },
      {
        segment: 'mainEvent',
        title: 'Main Events',
      },
      {
        segment: 'cseTech',
        title: 'CSE TECH',
      },
      {
        segment: 'eceTech',
        title: 'ECE TECH',
      }, {
        segment: 'eeeTech',
        title: 'EEE TECH',
      }, {
        segment: 'chemTech',
        title: 'CHEM TECH',
      }, {
        segment: 'civilTech',
        title: 'CIVIL TECH',
      }, {
        segment: 'mechTech',
        title: 'MECH TECH',
      }, {
        segment: 'mmeTech',
        title: 'MME TECH',
      },
    ],
  },
  {
    segment: 'Volunteers',
    title: 'Volunteers',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        segment: 'registration',
        title: 'Add New',
      },
      {
        segment: 'allVolunteers',
        title: 'All Volunteers',
      }
    ],
  },
  {
    segment: 'Images',
    title: 'Images',
    icon: <AcUnitIcon color='secondary' />,
    children: [
      {
        segment: 'sponsers',
        title: 'Sponsers',
      },
      {
        segment: 'gallery',
        title: 'Gallery',
      },
      {
        segment: 'galleryCarousel',
        title: 'Gallery Carousel',
      },
      ,
      {
        segment: 'departmentCarousel',
        title: 'Department Carousel',
      }
    ],
  },
  {
    segment: 'stalls',
    title: 'Stalls',
    icon: <CelebrationIcon color='secondary' />,
    children: [
      {
        segment: 'addStall',
        title: 'Add stall',
      },
      {
        segment: 'allStalls',
        title: 'All stalls',
      }
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
  let content = null;

  switch (pathname) {
    case "/Images/sponsers":
      content = <ImageUploader name={"Sponsor"} />;
      break;
    case "/Images/gallery":
      content = <ImageUploader name={"gallery"} />;
      break;
    case "/Images/galleryCarousel":
      content = <ImageUploader name={"galleryCarousel"} />;
      break;
    case "/Culturals/addEvent":
      content = <ManageEventsByAdmin />;
      break;
    case "/Images/departmentCarousel":
      content = <DepartmentCarouselImageUploader />
      break;
    case "/TechnicalEvents/addEvent":
      content = <AddTechnicalEvent />
      break;
    case "/Volunteers/registration":
      content = <AddVolunteer />
      break;
    case "/Volunteers/allVolunteers":
      content = <AllVolunteers />
      break;
      case "/TechnicalEvents/mainEvent":
      content = <AllTechnicalEvents key="MAIN" department="MainEvents" />
      break;
    case "/TechnicalEvents/cseTech":
      content = <AllTechnicalEvents key="CSE" department="CSE" />
      break;
    case "/TechnicalEvents/eceTech":
      content = <AllTechnicalEvents key="ECE" department="ECE" />
      break;
    case "/TechnicalEvents/eeeTech":
      content = <AllTechnicalEvents key="EEE" department="EEE" />
      break;
    case "/TechnicalEvents/mmeTech":
      content = <AllTechnicalEvents key="MME" department="MME" />
      break;
    case "/TechnicalEvents/chemTech":
      content = <AllTechnicalEvents key="Chemical" department="Chemical" />
      break;
    case "/TechnicalEvents/civilTech":
      content = <AllTechnicalEvents key="civil" department="Civil" />
      break;
    case "/TechnicalEvents/mechTech":
      content = <AllTechnicalEvents key="mechanical" department="Mechanical" />
      break;
    case "/stalls/addStall":
      content = <AddNewStall />
      break;
    case "/stalls/allStalls":
      content = <StallsDisplay />
      break;
    default:
      content = <div>{pathname}</div>;
  }

  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      {content}
    </Box>
  );
}



DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function NavBarLayout(props) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setSession({
          user: {
            name: user.displayName || "Guest",
            email: user.email || "No email",
            image: user.photoURL || "https://avatars.githubusercontent.com/u/19550456",
          },
        });
        toast.success("Successfully logged in");
      } else {
        setUser(null);
        setSession(null);
      }
    });

    return () => unsubscribe();
  }, []);



  const [session, setSession] = React.useState();

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        if (!user) {
          toast.info("Please log in first.");
          navigate('/auth/login')
          return;
        }
      },
      signOut: async () => {
        try {
          await auth.signOut();
          setSession(null);
          toast.success("Successfully logged out", { toastId: "logout-toast" });
          navigate('/');
        } catch (error) {
          toast.error("Error during logout");
        }
      },
    };
  }, [user, navigate]);




  const router = useDemoRouter('/dashboard');

  const ProtectedRoute = ({ children }) => {
    if (!session) {
      toast.warn("Please log in first!", { toastId: "login-toast" });
      return null;
    }
    return children;
  };
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

        >
          <ProtectedRoute>
            <DemoPageContent pathname={router.pathname} />
          </ProtectedRoute>
        </DashboardLayout>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </AppProvider>
    </ThemeProvider>
  );
}

NavBarLayout.propTypes = {
  window: PropTypes.func,
};

export default NavBarLayout;

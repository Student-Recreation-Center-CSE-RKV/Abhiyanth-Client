
import React from 'react';
import { Box, Typography } from '@mui/material';

const sponsorshipData = [
    { category: "Category", acceptability: "Acceptability" },
    { category: "Online Partner", acceptability: "Online coverage and promotion of the event before and during the event and post-event release" },
    { category: "Print Media Partner", acceptability: "Articles on all events and advertisements in city edition" },
    { category: "Travel Partner", acceptability: "Travel expenditure of outstation teams" },
    { category: "Gift Partner", acceptability: "Gifts for winners of First, Second, and Third position of every event" },
];

const SponsorshipPage = () => {
    return (
        <div
            style={{
                position: 'relative',
                color: 'white',
                display: 'flex',
                fontFamily: 'Audiowide, sans-serif', // Applied Audiowide font globally
                overflow: 'hidden',
                minHeight: '100vh', // Ensure full viewport height
            }}
        >
            {/* Rotated "BE A PARTNER" Text */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10%',
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'left center',
                    color: '#9747FF',
                    width: 'fit-content',
                    maxWidth: '150px',
                    textAlign: 'center',
                    fontSize: "28px",
                    fontWeight: '400',
                    letterSpacing: '2px',
                    whiteSpace: 'normal',
                }}
            >
                BE A<br /> PARTNER
            </div>

            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '60%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    zIndex: 2,
                }}
            >
                {/* Heading */}
    

                {/* Table Section */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60%',
                    }}
                >
                    {sponsorshipData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                borderBottom: '1px solid #FFFFFF',
                                padding: '10px 0',
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px',               
                                    color: index ==0?'#6AE4FF' :'#9747FF',
                                    fontWeight: index === 0 ? 'bold' : 'normal',
                                }}
                            >
                                {item.category}
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px',
                                    color: index===0 ? 'rgb(201, 28, 117)' : '#FFFFFF',
                                    fontWeight: index === 0 ? 'bold' : 'normal',
                                }}
                            >
                                {item.acceptability}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SponsorshipPage;

// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const sponsorshipData = [
//     { category: "Category", acceptability: "Acceptability" },
//     { category: "Online Partner", acceptability: "Online coverage and promotion of the event before and during the event and post-event release" },
//     { category: "Print Media Partner", acceptability: "Articles on all events and advertisements in city edition" },
//     { category: "Travel Partner", acceptability: "Travel expenditure of outstation teams" },
//     { category: "Gift Partner", acceptability: "Gifts for winners of First, Second, and Third position of every event" },
// ];

// const SponsorshipPage = () => {
//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 color: 'white',
//                 display: 'flex',
//                 fontFamily: 'Audiowide, sans-serif',
//                 overflow: 'hidden',
//                 minHeight: '100vh',
//             }}
//         >
//             {/* Rotated "BE A PARTNER" Text */}
//             <div
//                 style={{
//                     position: 'absolute',
//                     top: '50%',
//                     left: '10%',
//                     transform: 'rotate(-90deg)',
//                     transformOrigin: 'left center',
//                     color: '#9747FF',
//                     width: 'fit-content',
//                     maxWidth: '150px',
//                     textAlign: 'center',
//                     fontSize: "28px",
//                     fontWeight: '400',
//                     letterSpacing: '2px',
//                     whiteSpace: 'normal',
//                 }}
//             >
//                 BE A<br /> PARTNER
//             </div>

//             {/* Main Content */}
//             <div
//                 style={{
//                     flex: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     width: '60%',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: '0 20px',
//                     zIndex: 2,
//                 }}
//             >
//                 {/* Table Section */}
//                 <div
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//
//                     }}
//                 >
//                     {sponsorshipData.map((item, index) => (
//                         <div
//                             key={index}
//                             style={{
//                                 display: 'flex',
//                                 borderBottom: index !== 0 ? '1px solid #FFFFFF' : 'none',
//                                 padding: '10px 0',
//                                 backgroundColor: index === 0 ? '#9747FF' : 'transparent',
//                                 color: index === 0 ? '#FFFFFF' : '#FFFFFF',
//                                 fontWeight: index === 0 ? 'bold' : 'normal',
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     flex: 1,
//                                     textAlign: 'center',
//                                     padding: '10px',
//                                     border: index === 0 ? '2px solid #FFFFFF' : 'none',
//                                 }}
//                             >
//                                 {item.category}
//                             </div>
//                             <div
//                                 style={{
//                                     flex: 1,
//                                     textAlign: 'center',
//                                     padding: '10px',
//                                     border: index === 0 ? '2px solid #FFFFFF' : 'none',
//                                 }}
//                             >
//                                 {item.acceptability}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SponsorshipPage;


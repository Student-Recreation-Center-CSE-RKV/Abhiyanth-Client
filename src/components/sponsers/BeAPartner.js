
import React from 'react';

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
                {/* <div
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
                                borderBottom:index===0?'none': '1px solid #FFFFFF',
                                padding: '10px 0',
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px',               
                                    color: index ===0?'#6AE4FF' :'#9747FF',
                                    fontWeight: index === 0 ? 'bold' : 'normal',
                                    border: index === 0 ? '2px solid #6AE4FF' : 'none', // Four-sided border for the header row
                                    borderRadius: index === 0 ? '8px' : '0', // Rounded corners to mimic a button
                                    border: index === 0 ? '2px solid #6AE4FF' : 'none', // Border for the header row
                    borderRadius: index === 0 ? '8px 16px 0 0' : '0', // Custom rounded corners for "Acceptability"
                    marginRight: index === 0 ? '10px' : '0', // Gap between the two header boxes
                                }}
                            >
                                {item.category}
                            </div>
                            <div
                                style={{
                    //                 flex: 1,
                    //                 textAlign: 'center',
                    //                 padding: '10px',
                    //                 color: index===0 ? 'rgb(201, 28, 117)' : '#FFFFFF',
                    //                 fontWeight: index === 0 ? 'bold' : 'normal',
                            
                    //                  border: index === 0 ? '2px solid linear-gradient(45deg, #6AE4FF, rgb(201, 28, 117))' : 'none', // Border for the header row
                    // borderRadius: index === 0 ? '16px 8px 0 0' : '0', // Custom rounded corners for "Category"
                    // marginLeft: index === 0 ? '10px' : '0', // Gap between the two header boxes
                                    
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    border: index === 0 ? '4px solid transparent' : 'none', // Ensures the border area is defined
                    borderRadius: index === 0 ? '8px 16px 0 0' : '0', // Custom rounded corners
                    marginRight: index === 0 ? '10px' : '0',
                    backgroundClip: index === 0 ? 'border-box' : 'none', // Ensures gradient stays within the border
                    borderImage: index === 0
                        ? 'linear-gradient(45deg, #6AE4FF, rgb(201, 28, 117)) 1'
                        : 'none', // Gradient applied to the border
                    color: index === 0 ? '#6AE4FF' : '#9747FF', // Text color
                                }}
                            >
                                {item.acceptability}
                            </div>
                        </div>
                    ))}
                </div> */}
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
                borderBottom: index === 0 ? 'none' : '1px solid #FFFFFF',
                padding: '10px 0',
            }}
        >
            {/* Category Box */}
            <div
                style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '8px', // Reduced padding
                    marginRight: index === 0 ? '10px' : '0',
                    borderRadius: index === 0 ? '8px 16px 0 0' : '0',
                    color: index === 0 ? '#6AE4FF' : '#9747FF',
                    background: 'transparent', // Transparent background
                    border: index === 0 ? '2px solid transparent' : 'none',
                    borderImage: index === 0
                        ? 'linear-gradient(45deg, #6AE4FF, rgb(201, 28, 117)) 1' // Gradient border
                        : 'none',
                    // Optional: Add text shadow or other styling if needed
                }}
            >
                {item.category}
            </div>

            {/* Acceptability Box */}
            <div
                style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '8px', // Reduced padding
                    marginLeft: index === 0 ? '10px' : '0',
                    borderRadius: index === 0 ? '16px 8px 0 0' : '0',
                    color: index === 0 ? 'rgb(201, 28, 117)' : '#FFFFFF',
                    background: 'transparent', // Transparent background
                    border: index === 0 ? '2px solid transparent' : 'none',
                    borderImage: index === 0
                        ? 'linear-gradient(45deg, #6AE4FF, rgb(201, 28, 117)) 1' // Gradient border
                        : 'none',
                    // Optional: Add text shadow or other styling if needed
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


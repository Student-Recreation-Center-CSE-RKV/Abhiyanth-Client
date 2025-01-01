
import React from 'react';

const sponsorshipData = [
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
                backgroundColor: '#0A0A23',
                color: 'white',
                display: 'flex',
                fontFamily: 'Audiowide, sans-serif', // Applied Audiowide font globally
                overflow: 'hidden',
            }}
        >
            {/* Rotated "BE A PARTNER" Text */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'rotate(-90deg) translateY(-50%)',
                    color: '#9747FF',
                    width:'20%',
                    textAlign:'center',
                    fontSize: '40px',
                    fontWeight: '400',
                    letterSpacing: '2px',
                    whiteSpace: 'nowrap',
                }}
            >
                BE <br></br>
                A PARTNER
            </div>

            {/* Main Content */}
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    gap:'5',
                    flexDirection: 'column',
                    width:'60%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    zIndex: 2,
                }}
            >
                {/* Headings */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '60%',
                        borderBottom: '2px solid #FFFFFF',
                        marginBottom: '20px',
                        padding: '10px 0',
                    }}
                >
                    <h2
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem',
                            margin: 0,
                        }}
                    >
                        Category
                    </h2>
                    <h2
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontSize: '1.5rem',
                            margin: 0,
                        }}
                    >
                        Acceptability
                    </h2>
                </div>

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
                                    fontWeight: 'bold',
                                    color: '#8C52FF',
                                }}
                            >
                                {item.category}
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    padding: '10px',
                                    color: '#FFFFFF',
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


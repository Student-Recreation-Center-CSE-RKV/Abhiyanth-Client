import { useParams } from "react-router-dom";
import { getDataById } from "../../api/general";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { extractDateTimeFromTimestamp } from '../../utils/timeStampToDate';




const styles = {
    descriptionLayout: {
        margin: "3% 1%"
    },
    subHeading: {
        color: "#00B093",
        fontFamily: "Audiowide",
        fontSize: "30px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        marginBottom: "2rem",
        marginTop: "6rem",
    },
    contenttext: {
        color: "#D9D9D9",
        textAlign: "justify",
        fontFamily: "Audiowide",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        margin: "1%"
    },
    descriptionMain: {
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "space-between",
        alignSelf: "stretch",
        width: "100%",
        gap: "3%"
    },
    descriptionMain1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        alignSelf: "stretch",
        gap: "2%",
        height: "auto"
    },
    descriptionMain2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "auto"
    },
    registerButton: {
        backgroundColor: "#00B093",
        color: "#FFF",
        fontFamily: "Audiowide",
        fontSize: "18px",
        fontWeight: "500",
        textTransform: "none",
        margin: "2% 0",
        "&:hover": {
            backgroundColor: "#00785F"
        },

    }
};

export default function NewsDetails() {

    const isSmallScreen = useMediaQuery("(max-width:750px)");
    const isMediumScreen = useMediaQuery("(max-width:1200px)");



    const dynamicFontSize = isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px";

    const contentTextStyles = {
        ...styles.contenttext,
        fontSize: dynamicFontSize
    };

    const { id } = useParams();
    const [data, setData] = useState();
    console.log(id);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getDataById("news", id);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    const formattedDate = data ? extractDateTimeFromTimestamp(data.date).date : "";


    return (
        <Box sx={styles.descriptionLayout}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={styles.subHeading}>{data?.title}</Box>
                <Typography sx={{ color: "#D9D9D9", fontSize: "18px", fontFamily: "Audiowide", marginTop: '4rem' }}>
                    {formattedDate}
                </Typography>
            </Box>
            <Box sx={styles.descriptionMain}>
                <Box sx={styles.descriptionMain1}>
                    <Box>
                        <img
                            src={data?.image}
                            alt="Event"
                            style={{
                                width: "100%",
                                height: "400px",
                                borderRadius: "16.718px",
                                boxShadow: "0px 0px 8.359px 1.672px #00B093"
                            }}
                        />
                    </Box>
                </Box>
            </Box>
    
            <Box sx={styles.descriptionMain2}>
                <Typography sx={contentTextStyles}>{data?.description}</Typography>
            </Box>
        </Box>
    );
}




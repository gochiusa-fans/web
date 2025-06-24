import Box from "@mui/material/Box";
import NextImage from "next/image";

interface Props {
    src: string;
    alt: string;
}

const Image = (props: Props) => {
    return (
        <Box sx={{position: 'relative', height: 450}}>
            <NextImage src={props.src} alt={props.alt} style={{objectFit: "cover"}} fill/>
        </Box>
    );
}

export default Image;

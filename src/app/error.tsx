"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from 'next/image';
import Button from '@mui/material/Button';

const Page = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack spacing={1} alignItems="center">
                <Image
                    src="https://s1.250king.top/image/2025/01/ffjfpplt.jpg"
                    alt=""
                    width={198}
                    height={165}
                    style={{
                        maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)"
                    }}
                />
                <Typography variant="h3">500</Typography>
                <Typography color="textSecondary">服务器错误</Typography>
                <Button variant="contained" onClick={() => {document.location.reload()}}>刷新页面</Button>
            </Stack>
        </Box>
    );
}

export default Page;

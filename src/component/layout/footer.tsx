import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Link from "@/component/link";

const Footer = () => {
    return (
        <Box sx={{color: "#955e4b", backgroundColor: "#fae2a4"}}>
            <Container sx={{py: 2}}>
                <Stack spacing={1} component={"footer"}>
                    <Typography>
                        <Link href="https://250king.top/" underline="hover" color="inherit">©250king</Link>
                    </Typography>
                    <Typography>
                        <span style={{fontWeight: "bold"}}>本站全部内容禁止商业使用</span>。
                        文本内容除另有声明外，均在知识共享 署名-非商业性使用-相同方式共享 3.0（CC BY-NC-SA 3.0 CN）许可协议下提供，附加条款亦可能应用。
                        其他类型作品著作权归属原作者，如有授权遵照授权协议使用。
                    </Typography>
                    <Typography>此站非点兔官方，只是个粉丝网站！点兔真的是一个很可爱的作品！Built with love❤</Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;

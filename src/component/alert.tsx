"use client";
import Alert from "@mui/material/Alert";

const isSafari = () => {
    const ua = navigator.userAgent;
    return /Safari/.test(ua) && /Version/.test(ua) && !/Chrome|Chromium|Edg|OPR/.test(ua);
}

const SafariAlert = () => {
    return isSafari()? (
        <Alert severity="warning">iOS Safire不明原因会无法运行，请改用Chrome</Alert>
    ): null;
}

export default SafariAlert;

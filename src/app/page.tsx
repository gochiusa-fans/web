import {redirect, RedirectType} from "next/navigation";

const Page = () => {
    return (
        redirect("/april", RedirectType.replace)
    );
}

export default Page;

import SiteFooter from "../footer/Footer";
import SiteHeader from "../header/Header";


export default function DefaultTemplate(props: any) {
    return <div>
        <SiteHeader />
        {props.children}
        <SiteFooter />
    </div>;
}
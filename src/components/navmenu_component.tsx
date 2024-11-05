import { NavMenu } from "@shopify/app-bridge-react";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";

export const navmenu = () => {
    return (
        <AppProvider i18n={translations}>
            <NavMenu>
                <a href="/" rel="home">
                    Home
                </a>
                <a href="https://apps.armonikadijital.com/test-market-place/Profile">Profile</a>
                <a href="https://apps.armonikadijital.com/test-market-place/Products">Ürünler</a>
                <a href="https://apps.armonikadijital.com/test-market-place/Orders">Siparişler</a>
            </NavMenu>
        </AppProvider>
    );
};
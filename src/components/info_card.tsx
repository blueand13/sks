import {
    Card,
    Text,
    AppProvider,
    Page,
    TextContainer,
    Frame,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import React from "react";

export const CardWithResponsiveBorderRadius = () => {
    return (
        <AppProvider i18n={translations}>
            <Frame>
                <Page narrowWidth>
                    <div className="center-page">
                        <Text variant="headingLg" as="h5">
                            <img src="" alt="" />
                            test-market-place #Ana Menü
                        </Text>
                        <Card>
                            <TextContainer>
                                <Text variant="headingMd" as="h5">
                                    Hoşgeldiniz
                                </Text>
                                <p style={{ margin: "5px 0 0 0" }}>
                                    Shopify mağazanız için Pazaryeri Yönetimi uygulamamızı
                                    indirdiğiniz için teşekkür ederiz. Uygulamayı kullanmadan önce
                                    Hesap bilgilerinizi güncellemelisiniz. Tüm sorularınız için
                                    bizimle iletişime geçmekten çekinmeyiniz.
                                </p>
                                Whatsapp : <a href="{#}">+90 850 305 8964</a>
                                <br />
                                Email : destek@armonikadijital.com
                            </TextContainer>
                        </Card>
                    </div>
                </Page>
            </Frame>
        </AppProvider>
    );
};

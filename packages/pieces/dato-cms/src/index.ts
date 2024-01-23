import { createPiece } from "@activepieces/pieces-framework";
import { DatoCmsAuth } from "./lib/common/auth";
import { DatoCMSFetchAction } from "./lib/actions/fetchData";

export const datoCms = createPiece({
    displayName: "DatoCMS",
    auth: DatoCmsAuth,
    minimumSupportedRelease: '0.9.0',
    logoUrl: "https://www.datocms.com/images/brand-assets/main-icon.svg",
    authors: ["Sami Salih"],
    actions: [DatoCMSFetchAction],
    triggers: [],
});


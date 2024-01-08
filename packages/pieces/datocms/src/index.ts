
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";

export const datocms = createPiece({
  displayName: "DatoCMS",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.9.0',
  logoUrl: "https://cdn.activepieces.com/pieces/datocms.png",
  authors: ["Sami Salih"],
  actions: [],
  triggers: [],
});

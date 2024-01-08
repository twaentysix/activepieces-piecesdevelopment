// Typdefinition für die Feldverarbeitungsfunktion
type FieldProcessor = (field: any, value: any) => any;

export const FieldProcessors: Record<string, FieldProcessor> = {
    Link: (field, value) => {
        // DatoCMS-spezifische Logik für Linkfelder
        // Beachten Sie, dass dies von Ihrem spezifischen DatoCMS-Schema abhängt
        return {
            type: 'link',
            id: value,
            // Weitere notwendige Felder hier
        };
    },
    Array: (field, value) => {
        // DatoCMS-spezifische Logik für Arrayfelder
        // Die Struktur hängt von Ihrem DatoCMS-Schema ab
        return value.map(v => ({
            // Spezifische Logik abhängig vom Typ der Elemente im Array
        }));
    },
    Basic: (field, value) => value, // Grundlegende Feldverarbeitung bleibt gleich
};


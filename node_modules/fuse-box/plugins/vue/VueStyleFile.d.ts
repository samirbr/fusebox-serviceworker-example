import { VueBlockFile } from './VueBlockFile';
export declare class VueStyleFile extends VueBlockFile {
    fixSourceMapName(): void;
    private applyScopeIdToStyles(scopeId);
    process(): Promise<void>;
}

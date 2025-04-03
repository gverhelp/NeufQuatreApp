export interface AccueilItem {
    titre: string;
    description: string;
    image: string;
}

export interface SectionData {
    name: string;
    description: string;
    bankAccount: string;
    email: string;
    filled: number;
}

export interface SectionImagesData {
    title: string;
    image: string;
    section: SectionData;
}

export interface ChefData {
    name: string;
    totem: string;
    bafouille: string;
    image: string;
    phoneNumber: string;
    section: SectionData;
}

// Accueil page Interfaces
export interface AccueilItem {
    id: number;
    titre: string;
    description: string;
    image: string;
}


// Section page Interfaces
export interface SectionData {
    id: number;
    name: string;
    slug: string;
    showcaseImage: string;
    description: string;
    bankAccount: string;
    email: string;
    uniformDescription: string;
    uniformImage: string;
    filled: number;
    section_images: SectionImagesData[];
    chefs: ChefData[];
}

export interface SectionImagesData {
    id: number;
    title: string;
    image: string;
    section: string;
}

export interface ChefData {
    id: number;
    name: string;
    totem: string;
    bafouille: string;
    image: string;
    phoneNumber: string;
    section: string;
}


// Agenda page Interfaces
export interface EventData {
    id: number;
    title: string;
    start_time: string;
    end_time: string;
    description: string;
    location: string;
    section: string;
    highlight: boolean;
}


// RadioCamp page Interfaces
export interface RadioCampData {
    id: number;
    section: SectionData;
    title: string;
    password: string;
    start_date: string;
    end_date: string;
    posts: PostData[];
}

export interface PostData {
    id: number;
    radio_camp: number;
    title: string;
    content: string;
    date: string;
    photos: PhotoData[];
    videos: VideoData[];
}

export interface PhotoData {
    id: number;
    post: number;
    image: string;
    caption: string;
}

export interface VideoData {
    id: number;
    post: number;
    video: string;
    caption: string;
}
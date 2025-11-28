// TypeScript interfaces for CV data structure

export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    birthDate: string;
    title: string;
    photo?: string; // base64 encoded image
}

export interface Experience {
    id: string;
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    school: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export interface Language {
    id: string;
    language: string;
    proficiency: 'Basic' | 'Intermediate' | 'Advanced' | 'Native';
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
}

export type TemplateId = 'modern' | 'classic' | 'minimal' | 'bold';

export interface CVData {
    templateId: TemplateId;
    personal: PersonalInfo;
    summary: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
    languages: Language[];
    certifications: Certification[];
}

export const initialCVData: CVData = {
    templateId: 'modern',
    personal: {
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        birthDate: '',
        title: '',
        photo: undefined,
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: [],
    certifications: [],
};

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CVData, initialCVData, PersonalInfo, Experience, Education, Language, Certification, TemplateId } from '../types';

interface CVContextType {
    cvData: CVData;
    updatePersonal: (field: keyof PersonalInfo, value: any) => void;
    updateSummary: (summary: string) => void;

    // Experience
    addExperience: () => void;
    removeExperience: (id: string) => void;
    updateExperience: (id: string, field: keyof Experience, value: any) => void;

    // Education
    addEducation: () => void;
    removeEducation: (id: string) => void;
    updateEducation: (id: string, field: keyof Education, value: any) => void;

    // Skills
    addSkill: (skill: string) => void;
    removeSkill: (skill: string) => void;

    // Languages
    addLanguage: () => void;
    removeLanguage: (id: string) => void;
    updateLanguage: (id: string, field: keyof Language, value: any) => void;

    // Certifications
    addCertification: () => void;
    removeCertification: (id: string) => void;
    updateCertification: (id: string, field: keyof Certification, value: any) => void;

    // Hobbies
    addHobby: (hobby: string) => void;
    removeHobby: (hobby: string) => void;

    updateTemplate: (templateId: TemplateId) => void;
    updateColor: (color: string) => void;
    resetData: () => void;
}

const CVContext = createContext<CVContextType | undefined>(undefined);

export function CVProvider({ children }: { children: ReactNode }) {
    const [cvData, setCVData] = useState<CVData>(initialCVData);

    const updatePersonal = (field: keyof PersonalInfo, value: any) => {
        setCVData((prev) => ({
            ...prev,
            personal: { ...prev.personal, [field]: value },
        }));
    };

    const updateSummary = (summary: string) => {
        setCVData((prev) => ({ ...prev, summary }));
    };

    // Experience
    const addExperience = () => {
        const newExperience: Experience = {
            id: `${Date.now()}-${Math.random()}`,
            position: '',
            company: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
        };
        setCVData((prev) => ({
            ...prev,
            experience: [...prev.experience, newExperience],
        }));
    };

    const removeExperience = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            experience: prev.experience.filter((exp) => exp.id !== id),
        }));
    };

    const updateExperience = (id: string, field: keyof Experience, value: any) => {
        setCVData((prev) => ({
            ...prev,
            experience: prev.experience.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            ),
        }));
    };

    // Education
    const addEducation = () => {
        const newEducation: Education = {
            id: `${Date.now()}-${Math.random()}`,
            degree: '',
            school: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
        };
        setCVData((prev) => ({
            ...prev,
            education: [...prev.education, newEducation],
        }));
    };

    const removeEducation = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            education: prev.education.filter((edu) => edu.id !== id),
        }));
    };

    const updateEducation = (id: string, field: keyof Education, value: any) => {
        setCVData((prev) => ({
            ...prev,
            education: prev.education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            ),
        }));
    };

    // Skills
    const addSkill = (skill: string) => {
        if (!cvData.skills.includes(skill)) {
            setCVData((prev) => ({
                ...prev,
                skills: [...prev.skills, skill],
            }));
        }
    };

    const removeSkill = (skill: string) => {
        setCVData((prev) => ({
            ...prev,
            skills: prev.skills.filter((s) => s !== skill),
        }));
    };

    // Languages
    const addLanguage = () => {
        const newLanguage: Language = {
            id: `${Date.now()}-${Math.random()}`,
            language: '',
            proficiency: 'Basic',
        };
        setCVData((prev) => ({
            ...prev,
            languages: [...prev.languages, newLanguage],
        }));
    };

    const removeLanguage = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            languages: prev.languages.filter((lang) => lang.id !== id),
        }));
    };

    const updateLanguage = (id: string, field: keyof Language, value: any) => {
        setCVData((prev) => ({
            ...prev,
            languages: prev.languages.map((lang) =>
                lang.id === id ? { ...lang, [field]: value } : lang
            ),
        }));
    };

    // Certifications
    const addCertification = () => {
        const newCertification: Certification = {
            id: `${Date.now()}-${Math.random()}`,
            name: '',
            issuer: '',
            date: '',
            credentialId: '',
        };
        setCVData((prev) => ({
            ...prev,
            certifications: [...prev.certifications, newCertification],
        }));
    };

    const removeCertification = (id: string) => {
        setCVData((prev) => ({
            ...prev,
            certifications: prev.certifications.filter((cert) => cert.id !== id),
        }));
    };

    const updateCertification = (id: string, field: keyof Certification, value: any) => {
        setCVData((prev) => ({
            ...prev,
            certifications: prev.certifications.map((cert) =>
                cert.id === id ? { ...cert, [field]: value } : cert
            ),
        }));
    };

    // Hobbies
    const addHobby = (hobby: string) => {
        if (!cvData.hobbies || !cvData.hobbies.includes(hobby)) {
            setCVData((prev) => ({
                ...prev,
                hobbies: [...(prev.hobbies || []), hobby],
            }));
        }
    };

    const removeHobby = (hobby: string) => {
        setCVData((prev) => ({
            ...prev,
            hobbies: (prev.hobbies || []).filter((h) => h !== hobby),
        }));
    };

    const updateTemplate = (templateId: TemplateId) => {
        setCVData((prev) => ({ ...prev, templateId }));
    };

    const updateColor = (color: string) => {
        setCVData((prev) => ({ ...prev, themeColor: color }));
    };

    const resetData = () => {
        setCVData(initialCVData);
    };

    return (
        <CVContext.Provider
            value={{
                cvData,
                updatePersonal,
                updateSummary,
                addExperience,
                removeExperience,
                updateExperience,
                addEducation,
                removeEducation,
                updateEducation,
                addSkill,
                removeSkill,
                addLanguage,
                removeLanguage,
                updateLanguage,
                addCertification,
                removeCertification,
                updateCertification,
                addHobby,
                removeHobby,
                updateTemplate,
                updateColor,
                resetData,
            }}
        >
            {children}
        </CVContext.Provider>
    );
}

export function useCVContext() {
    const context = useContext(CVContext);
    if (context === undefined) {
        throw new Error('useCVContext must be used within a CVProvider');
    }
    return context;
}

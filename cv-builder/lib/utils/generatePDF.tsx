import React from 'react';
import { CVData } from '../types';
import { translations } from '../translations';

export async function generatePDF(cvData: CVData, language: 'en' | 'pt') {
    try {
        const ReactPDF = await import('@react-pdf/renderer');
        const pdf = ReactPDF.pdf;
        const ModernTemplate = (await import('@/components/pdf/ModernTemplate')).default;
        const ClassicTemplate = (await import('@/components/pdf/ClassicTemplate')).default;
        const MinimalTemplate = (await import('@/components/pdf/MinimalTemplate')).default;
        const BoldTemplate = (await import('@/components/pdf/BoldTemplate')).default;
        const ExecutiveTemplate = (await import('@/components/pdf/ExecutiveTemplate')).default;
        const CreativeTemplate = (await import('@/components/pdf/CreativeTemplate')).default;
        const ProfessionalTemplate = (await import('@/components/pdf/ProfessionalTemplate')).default;
        const TimelineTemplate = (await import('@/components/pdf/TimelineTemplate')).default;
        const TwoColumnTemplate = (await import('@/components/pdf/TwoColumnTemplate')).default;
        const MinimalistProTemplate = (await import('@/components/pdf/MinimalistProTemplate')).default;

        const t = translations[language].pdf;
        let template: React.ReactElement;

        switch (cvData.templateId) {
            case 'modern':
                template = <ModernTemplate data={cvData} t={t} />;
                break;
            case 'classic':
                template = <ClassicTemplate data={cvData} t={t} />;
                break;
            case 'minimal':
                template = <MinimalTemplate data={cvData} t={t} />;
                break;
            case 'bold':
                template = <BoldTemplate data={cvData} t={t} />;
                break;
            case 'executive':
                template = <ExecutiveTemplate data={cvData} t={t} />;
                break;
            case 'creative':
                template = <CreativeTemplate data={cvData} t={t} />;
                break;
            case 'professional':
                template = <ProfessionalTemplate data={cvData} t={t} />;
                break;
            case 'timeline':
                template = <TimelineTemplate data={cvData} t={t} />;
                break;
            case 'two-column':
                template = <TwoColumnTemplate data={cvData} t={t} />;
                break;
            case 'minimalist-pro':
                template = <MinimalistProTemplate data={cvData} t={t} />;
                break;
            default:
                template = <ModernTemplate data={cvData} t={t} />;
        }

        const blob = await pdf(template).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `CV-${cvData.personal.fullName || 'Resume'}-${cvData.templateId}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Failed to generate PDF:', error);
        throw new Error('PDF generation failed. Please try again.');
    }
}

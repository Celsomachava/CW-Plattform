'use client';

import { useState, useEffect } from 'react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Eye, Loader2 } from 'lucide-react';

export default function Preview() {
    const { cvData } = useCVContext();
    const { t, language } = useLanguage();
    const [pdfPreview, setPdfPreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const generatePreview = async () => {
            setIsLoading(true);
            try {
                const ReactPDF = await import('@react-pdf/renderer');
                const { pdf } = ReactPDF;
                const ModernTemplate = (await import('@/components/pdf/ModernTemplate')).default;
                const ClassicTemplate = (await import('@/components/pdf/ClassicTemplate')).default;
                const MinimalTemplate = (await import('@/components/pdf/MinimalTemplate')).default;
                const BoldTemplate = (await import('@/components/pdf/BoldTemplate')).default;
                const { translations } = await import('@/lib/translations');

                const t = translations[language].pdf;
                let template;

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
                    default:
                        template = <ModernTemplate data={cvData} t={t} />;
                }

                const blob = await pdf(template).toBlob();
                const url = URL.createObjectURL(blob);
                setPdfPreview(url);
            } catch (error) {
                console.error('Failed to generate preview:', error);
            } finally {
                setIsLoading(false);
            }
        };

        generatePreview();

        return () => {
            if (pdfPreview) {
                URL.revokeObjectURL(pdfPreview);
            }
        };
    }, [cvData, language]);

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.preview.title}</h2>
                <p className="text-gray-600">{t.steps.preview.subtitle}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-brand-lilac animate-spin mb-4" />
                        <p className="text-gray-600">Generating preview...</p>
                    </div>
                ) : pdfPreview ? (
                    <div className="w-full">
                        <iframe
                            src={`${pdfPreview}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full h-[600px] border border-gray-200 rounded-lg pointer-events-none"
                            title="PDF Preview"
                        />
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        <p>Failed to generate preview</p>
                    </div>
                )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                    <strong>Next:</strong> Complete your payment to download your professional CV as a PDF file.
                </p>
            </div>
        </div>
    );
}
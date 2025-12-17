'use client';

import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Eye, FileText, User, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Preview() {
    const { cvData } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.preview.title}</h2>
                <p className="text-gray-600">{t.steps.preview.subtitle}</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-900">{cvData.personal.fullName || 'Your Name'}</h3>
                        <p className="text-sm text-gray-600">{cvData.personal.title || 'Professional Title'}</p>
                        <p className="text-sm text-gray-500">{cvData.personal.email} • {cvData.personal.phone}</p>
                    </div>
                </div>

                {cvData.summary && (
                    <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                            <h4 className="font-medium text-gray-900 mb-1">Summary</h4>
                            <p className="text-sm text-gray-600 line-clamp-3">{cvData.summary}</p>
                        </div>
                    </div>
                )}

                {cvData.experience.length > 0 && (
                    <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                            <h4 className="font-medium text-gray-900 mb-1">Experience</h4>
                            <p className="text-sm text-gray-600">{cvData.experience.length} position(s) added</p>
                        </div>
                    </div>
                )}

                {cvData.education.length > 0 && (
                    <div className="flex items-start gap-3">
                        <GraduationCap className="w-5 h-5 text-gray-500 mt-1" />
                        <div>
                            <h4 className="font-medium text-gray-900 mb-1">Education</h4>
                            <p className="text-sm text-gray-600">{cvData.education.length} education(s) added</p>
                        </div>
                    </div>
                )}

                <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                        <h4 className="font-medium text-gray-900 mb-1">Skills & More</h4>
                        <p className="text-sm text-gray-600">
                            {cvData.skills.length} skills, {cvData.languages.length} languages, {cvData.certifications.length} certifications
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                    <strong>Next:</strong> Complete your payment to download your professional CV as a PDF file.
                </p>
            </div>
        </div>
    );
}
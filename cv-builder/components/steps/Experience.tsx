'use client';

import { Plus, Trash2 } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Experience() {
    const { cvData, addExperience, removeExperience, updateExperience } = useCVContext();
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.experience.title}</h2>
                <p className="text-gray-600">{t.steps.experience.subtitle}</p>
            </div>

            <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                    <div key={exp.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative group">
                        <button
                            onClick={() => removeExperience(exp.id)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t.steps.experience.position}</label>
                                <input
                                    type="text"
                                    value={exp.position}
                                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">{t.steps.experience.company}</label>
                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="text"
                                    value={exp.startDate}
                                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none"
                                    placeholder="MM/YYYY"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">End Date</label>
                                <input
                                    type="text"
                                    value={exp.endDate}
                                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none"
                                    placeholder="MM/YYYY or Present"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">{t.steps.experience.description}</label>
                            <textarea
                                value={exp.description}
                                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none h-24 resize-none"
                            />
                        </div>
                    </div>
                ))}

                <button
                    onClick={addExperience}
                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-500 hover:border-brand-lilac hover:text-brand-lilac hover:bg-brand-lilac/5 transition-all flex items-center justify-center gap-2 font-medium"
                >
                    <Plus className="w-5 h-5" />
                    {t.steps.experience.add}
                </button>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { ChevronRight, FileText, User, Briefcase, GraduationCap, Award, Languages, Trophy, Heart, Eye, CreditCard } from 'lucide-react';

import { useLanguage } from '@/lib/context/LanguageContext';
import PersonalInfo from '../steps/PersonalInfoNew';
import Summary from '../steps/Summary';
import Experience from '../steps/Experience';
import Education from '../steps/Education';
import Skills from '../steps/Skills';
import LanguagesStep from '../steps/Languages';
import Certifications from '../steps/Certifications';
import Hobbies from '../steps/Hobbies';
import ColorPicker from '../steps/ColorPicker';
import TemplateSelector from '../steps/TemplateSelector';
import LivePreview from './LivePreview';
import Payment from '../steps/Payment';

import { Palette, Layout } from 'lucide-react';

const sections = [
    { id: 'template', icon: Layout, label: 'Template' },
    { id: 'personal', icon: User, label: 'Personal Info' },
    { id: 'summary', icon: FileText, label: 'Summary' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'skills', icon: Award, label: 'Skills' },
    { id: 'languages', icon: Languages, label: 'Languages' },
    { id: 'certifications', icon: Trophy, label: 'Certifications' },
    { id: 'hobbies', icon: Heart, label: 'Hobbies' },
    { id: 'color', icon: Palette, label: 'Color' },
    { id: 'preview', icon: Eye, label: 'Preview' },
    { id: 'payment', icon: CreditCard, label: 'Download' },
];

export default function BuilderLayout() {
    const [activeSection, setActiveSection] = useState('template');
    const { language } = useLanguage();

    const renderSection = () => {
        switch (activeSection) {
            case 'template': return <TemplateSelector />;
            case 'personal': return <PersonalInfo />;
            case 'summary': return <Summary />;
            case 'experience': return <Experience />;
            case 'education': return <Education />;
            case 'skills': return <Skills />;
            case 'languages': return <LanguagesStep />;
            case 'certifications': return <Certifications />;
            case 'hobbies': return <Hobbies />;
            case 'color': return <ColorPicker />;
            case 'preview': return <LivePreview />;
            case 'payment': return <Payment />;
            default: return <PersonalInfo />;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Left Sidebar Navigation */}
            <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
                <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">
                        {language === 'pt' ? 'Construir CV' : 'Build CV'}
                    </h2>
                    <nav className="space-y-1">
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                        activeSection === section.id
                                            ? 'bg-brand-lilac text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{section.label}</span>
                                    {activeSection === section.id && (
                                        <ChevronRight className="w-4 h-4 ml-auto" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Form Section */}
                <div className="flex-1 overflow-y-auto flex flex-col">
                    <div className="flex-1 max-w-3xl mx-auto p-8 w-full">
                        {renderSection()}
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="border-t border-gray-200 bg-white p-6">
                        <div className="max-w-3xl mx-auto flex justify-between">
                            <button
                                onClick={() => {
                                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                                    if (currentIndex > 0) {
                                        setActiveSection(sections[currentIndex - 1].id);
                                    }
                                }}
                                disabled={activeSection === sections[0].id}
                                className="px-8 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {language === 'pt' ? 'Voltar' : 'Back'}
                            </button>
                            <button
                                onClick={() => {
                                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                                    if (currentIndex < sections.length - 1) {
                                        setActiveSection(sections[currentIndex + 1].id);
                                    }
                                }}
                                disabled={activeSection === sections[sections.length - 1].id}
                                className="px-8 py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {language === 'pt' ? 'Continuar' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Live Preview Section */}
                {activeSection !== 'payment' && activeSection !== 'preview' && (
                    <div className="w-[500px] bg-white border-l border-gray-200 overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
                            <h3 className="font-semibold text-gray-900">
                                {language === 'pt' ? 'Visualização' : 'Live Preview'}
                            </h3>
                        </div>
                        <div className="p-6">
                            <LivePreview />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

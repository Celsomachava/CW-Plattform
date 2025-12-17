'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useCVContext } from '@/lib/context/CVContext';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Hobbies() {
    const { cvData, addHobby, removeHobby } = useCVContext();
    const { t, language } = useLanguage();
    const [inputValue, setInputValue] = useState('');
    
    const translations = {
        en: {
            title: 'Hobbies & Interests',
            subtitle: 'Add your hobbies',
            add: 'Add Hobby',
            placeholder: 'e.g. Photography'
        },
        pt: {
            title: 'Hobbies e Interesses',
            subtitle: 'Adicione seus hobbies',
            add: 'Adicionar Hobby',
            placeholder: 'ex: Fotografia'
        }
    };
    
    const hobbiesT = translations[language];

    const handleAdd = () => {
        if (inputValue.trim()) {
            addHobby(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{hobbiesT.title}</h2>
                <p className="text-gray-600">{hobbiesT.subtitle}</p>
            </div>

            <div className="space-y-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={hobbiesT.placeholder}
                        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-lilac focus:ring-2 focus:ring-brand-lilac/20 outline-none transition-all text-black placeholder-gray-400"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-6 py-3 bg-brand-lilac text-white rounded-xl font-medium hover:bg-brand-lilac/90 transition-colors flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        {hobbiesT.add}
                    </button>
                </div>

                <div className="flex flex-wrap gap-2">
                    {cvData.hobbies && cvData.hobbies.map((hobby, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium group hover:bg-red-50 transition-colors"
                        >
                            <span>{hobby}</span>
                            <button
                                onClick={() => removeHobby(hobby)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {(!cvData.hobbies || cvData.hobbies.length === 0) && (
                    <div className="text-center py-8 text-gray-400">
                        <p>No hobbies added yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}

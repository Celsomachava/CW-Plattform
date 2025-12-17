'use client';

import { useState, useEffect } from 'react';
import { CreditCard, Shield, Download, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';
import { useCVContext } from '@/lib/context/CVContext';
import { generatePDF } from '@/lib/utils/generatePDF';
import StripeForm from '../payment/StripeForm';

export default function Payment() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const { t } = useLanguage();
    const { cvData } = useCVContext();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 10000 }), // 100 MZN in cents
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((error) => console.error('Payment setup failed:', error));
    }, []);

    const handlePayment = async () => {
        if (!clientSecret) return;
        
        setIsProcessing(true);
        
        // For demo purposes, simulate payment success
        // In production, integrate with actual Stripe Elements
        setTimeout(() => {
            setIsProcessing(false);
            setPaymentComplete(true);
        }, 2000);
    };

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            await generatePDF(cvData, 'en');
        } catch (error) {
            console.error('Failed to generate PDF:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    if (paymentComplete) {
        return (
            <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Download className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.steps.payment.success}</h2>
                <p className="text-gray-600">{t.steps.payment.successDesc}</p>
                
                <button
                    onClick={handleDownload}
                    disabled={isGenerating}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {t.wizard.generating}
                        </>
                    ) : (
                        <>
                            <Download className="w-5 h-5" />
                            {t.wizard.download}
                        </>
                    )}
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.steps.payment.title}</h2>
                <p className="text-gray-600">{t.steps.payment.subtitle}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">100 MZN</div>
                    <p className="text-gray-600 mb-4">{t.steps.payment.description}</p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                        <Shield className="w-4 h-4" />
                        <span>{t.steps.payment.secure}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">{t.steps.payment.includes}</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Professional PDF download
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            No watermarks
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            High-quality formatting
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Instant download
                        </li>
                    </ul>
                </div>

                <StripeForm
                    onPaymentSuccess={() => setPaymentComplete(true)}
                    isProcessing={isProcessing}
                    onSubmit={handlePayment}
                />

                <p className="text-xs text-gray-500 text-center">
                    {t.steps.payment.terms}
                </p>
            </div>
        </div>
    );
}
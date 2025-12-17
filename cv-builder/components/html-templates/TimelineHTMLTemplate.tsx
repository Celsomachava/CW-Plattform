// Timeline Template - Modern vertical timeline layout (ATS-friendly)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function TimelineHTMLTemplate({ data, t }: Props) {
    return `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            .timeline-template { 
                    width: 210mm; 
                    min-height: 297mm; 
                    padding: 20mm; 
                    margin: 0 auto;
                    background: white;
                }
                
                /* Header Section */
                .header { 
                    text-align: center; 
                    margin-bottom: 40px;
                    padding-bottom: 30px;
                    border-bottom: 3px solid ${data.themeColor || '#6d54b0'};
                }
                .name { 
                    font-size: 36px; 
                    font-weight: 700; 
                    color: #1a202c;
                    margin-bottom: 8px;
                    letter-spacing: -0.5px;
                }
                .title { 
                    font-size: 18px; 
                    color: ${data.themeColor || '#6d54b0'};
                    font-weight: 600;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .contact-info {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                    font-size: 12px;
                    color: #4a5568;
                }
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                /* Summary Section */
                .summary-section {
                    margin-bottom: 35px;
                }
                .summary-text {
                    font-size: 13px;
                    line-height: 1.8;
                    color: #4a5568;
                    text-align: justify;
                }
                
                /* Section Headers */
                .section-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #1a202c;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 25px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid ${data.themeColor || '#6d54b0'};
                }
                
                /* Timeline Items */
                .timeline-section {
                    margin-bottom: 35px;
                }
                .timeline-item {
                    display: flex;
                    margin-bottom: 30px;
                    position: relative;
                }
                .timeline-marker {
                    width: 40px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-right: 20px;
                }
                .timeline-dot {
                    width: 14px;
                    height: 14px;
                    background: ${data.themeColor || '#6d54b0'};
                    border-radius: 50%;
                    border: 3px solid white;
                    box-shadow: 0 0 0 2px ${data.themeColor || '#6d54b0'};
                    margin-top: 4px;
                }
                .timeline-line {
                    width: 2px;
                    flex: 1;
                    background: #e2e8f0;
                    margin-top: 8px;
                }
                .timeline-content {
                    flex: 1;
                    padding-bottom: 10px;
                }
                .timeline-title {
                    font-size: 14px;
                    font-weight: 600;
                    color: #1a202c;
                    margin-bottom: 4px;
                }
                .timeline-subtitle {
                    font-size: 13px;
                    font-weight: 500;
                    color: ${data.themeColor || '#6d54b0'};
                    margin-bottom: 6px;
                }
                .timeline-meta {
                    font-size: 11px;
                    color: #718096;
                    margin-bottom: 10px;
                }
                .timeline-description {
                    font-size: 12px;
                    line-height: 1.7;
                    color: #4a5568;
                }
                
                /* Skills Grid */
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                    margin-bottom: 35px;
                }
                .skill-item {
                    background: #f7fafc;
                    padding: 10px 15px;
                    border-radius: 6px;
                    font-size: 12px;
                    color: #2d3748;
                    font-weight: 500;
                    text-align: center;
                    border-left: 3px solid ${data.themeColor || '#6d54b0'};
                }
                
                /* Languages & Certifications */
                .two-column-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 35px;
                }
                .language-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                    border-bottom: 1px solid #e2e8f0;
                }
                .language-name {
                    font-size: 12px;
                    font-weight: 600;
                    color: #2d3748;
                }
                .language-level {
                    font-size: 11px;
                    color: #718096;
                    font-weight: 500;
                }
                .cert-item {
                    margin-bottom: 15px;
                }
                .cert-name {
                    font-size: 13px;
                    font-weight: 600;
                    color: #2d3748;
                }
                .cert-issuer {
                    font-size: 11px;
                    color: #718096;
                }
                
            @media print {
                .timeline-template {
                    padding: 15mm;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        </style>
        <div class="timeline-template">
                <!-- Header -->
                <div class="header">
                    <div class="name">${data.personal.fullName || ''}</div>
                    <div class="title">${data.personal.title || ''}</div>
                    <div class="contact-info">
                        ${data.personal.email ? `<div class="contact-item">📧 ${data.personal.email}</div>` : ''}
                        ${data.personal.phone ? `<div class="contact-item">📱 ${data.personal.phone}</div>` : ''}
                        ${data.personal.address ? `<div class="contact-item">📍 ${data.personal.address}</div>` : ''}
                        ${data.personal.linkedin ? `<div class="contact-item">🔗 ${data.personal.linkedin}</div>` : ''}
                    </div>
                </div>
                
                <!-- Summary -->
                ${data.summary ? `
                <div class="summary-section">
                    <div class="section-title">${t.summary || 'Professional Summary'}</div>
                    <div class="summary-text">${data.summary}</div>
                </div>
                ` : ''}
                
                <!-- Experience Timeline -->
                ${data.experience && data.experience.length > 0 ? `
                <div class="timeline-section">
                    <div class="section-title">${t.experience || 'Work Experience'}</div>
                    ${data.experience.map((exp, index) => `
                        <div class="timeline-item">
                            <div class="timeline-marker">
                                <div class="timeline-dot"></div>
                                ${index < data.experience.length - 1 ? '<div class="timeline-line"></div>' : ''}
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-title">${exp.position || ''}</div>
                                <div class="timeline-subtitle">${exp.company || ''}${exp.location ? ` • ${exp.location}` : ''}</div>
                                <div class="timeline-meta">${exp.startDate || ''} - ${exp.current ? (t.present || 'Present') : (exp.endDate || '')}</div>
                                ${exp.description ? `<div class="timeline-description">${exp.description}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                <!-- Education Timeline -->
                ${data.education && data.education.length > 0 ? `
                <div class="timeline-section">
                    <div class="section-title">${t.education || 'Education'}</div>
                    ${data.education.map((edu, index) => `
                        <div class="timeline-item">
                            <div class="timeline-marker">
                                <div class="timeline-dot"></div>
                                ${index < data.education.length - 1 ? '<div class="timeline-line"></div>' : ''}
                            </div>
                            <div class="timeline-content">
                                <div class="timeline-title">${edu.degree || ''}</div>
                                <div class="timeline-subtitle">${edu.school || ''}${edu.location ? ` • ${edu.location}` : ''}</div>
                                ${!edu.hideDates ? `<div class="timeline-meta">${edu.startDate || ''} - ${edu.endDate || ''}</div>` : ''}
                                ${edu.description ? `<div class="timeline-description">${edu.description}</div>` : ''}
                                ${edu.extraInfo ? `<div class="timeline-description">${edu.extraInfo}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                <!-- Skills -->
                ${data.skills && data.skills.length > 0 ? `
                <div>
                    <div class="section-title">${t.skills || 'Skills'}</div>
                    <div class="skills-grid">
                        ${data.skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
                    </div>
                </div>
                ` : ''}
                
                <!-- Languages & Certifications -->
                ${(data.languages && data.languages.length > 0) || (data.certifications && data.certifications.length > 0) ? `
                <div class="two-column-grid">
                    ${data.languages && data.languages.length > 0 ? `
                    <div>
                        <div class="section-title">${t.languages || 'Languages'}</div>
                        ${data.languages.map(lang => `
                            <div class="language-item">
                                <span class="language-name">${lang.language}</span>
                                <span class="language-level">${lang.proficiency}</span>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                    
                    ${data.certifications && data.certifications.length > 0 ? `
                    <div>
                        <div class="section-title">${t.certifications || 'Certifications'}</div>
                        ${data.certifications.map(cert => `
                            <div class="cert-item">
                                <div class="cert-name">${cert.name}</div>
                                <div class="cert-issuer">${cert.issuer} • ${cert.date}</div>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
                ` : ''}
        </div>
    `;
}

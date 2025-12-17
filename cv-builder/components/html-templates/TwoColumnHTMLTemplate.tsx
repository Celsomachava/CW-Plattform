// Two Column Template - Professional sidebar layout (ATS-friendly)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function TwoColumnHTMLTemplate({ data, t }: Props) {
    return `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            .two-column-template { 
                    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif; 
                    background: white;
                    color: #2c3e50;
                }
                .two-column-template { 
                    display: flex;
                    width: 210mm; 
                    min-height: 297mm; 
                    margin: 0 auto;
                    background: white;
                }
                
                /* Left Sidebar - 30% */
                .sidebar {
                    width: 30%;
                    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                    color: white;
                    padding: 30px 25px;
                }
                .sidebar-section {
                    margin-bottom: 30px;
                }
                .sidebar-title {
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 15px;
                    padding-bottom: 8px;
                    border-bottom: 2px solid ${data.themeColor || '#6d54b0'};
                    color: white;
                }
                .contact-item {
                    margin-bottom: 12px;
                    font-size: 11px;
                    line-height: 1.6;
                    word-wrap: break-word;
                }
                .contact-label {
                    font-weight: 600;
                    color: ${data.themeColor || '#6d54b0'};
                    display: block;
                    margin-bottom: 3px;
                }
                .skill-tag {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.15);
                    padding: 6px 12px;
                    border-radius: 4px;
                    margin: 0 6px 8px 0;
                    font-size: 11px;
                    font-weight: 500;
                }
                .language-item {
                    margin-bottom: 12px;
                }
                .language-name {
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 3px;
                }
                .language-level {
                    font-size: 10px;
                    color: #bdc3c7;
                }
                
                /* Right Main Content - 70% */
                .main-content {
                    width: 70%;
                    padding: 30px 35px;
                    background: white;
                }
                
                /* Header */
                .header {
                    margin-bottom: 35px;
                    padding-bottom: 25px;
                    border-bottom: 3px solid ${data.themeColor || '#6d54b0'};
                }
                .name {
                    font-size: 32px;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 8px;
                    letter-spacing: -0.5px;
                }
                .job-title {
                    font-size: 16px;
                    color: ${data.themeColor || '#6d54b0'};
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                }
                
                /* Sections */
                .content-section {
                    margin-bottom: 30px;
                }
                .section-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: #2c3e50;
                    text-transform: uppercase;
                    letter-spacing: 1.2px;
                    margin-bottom: 18px;
                    padding-bottom: 8px;
                    border-bottom: 2px solid #ecf0f1;
                }
                .summary-text {
                    font-size: 12px;
                    line-height: 1.8;
                    color: #34495e;
                    text-align: justify;
                }
                
                /* Experience & Education Items */
                .item {
                    margin-bottom: 22px;
                }
                .item-title {
                    font-size: 13px;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 4px;
                }
                .item-subtitle {
                    font-size: 12px;
                    font-weight: 600;
                    color: ${data.themeColor || '#6d54b0'};
                    margin-bottom: 5px;
                }
                .item-meta {
                    font-size: 11px;
                    color: #7f8c8d;
                    margin-bottom: 8px;
                }
                .item-description {
                    font-size: 11px;
                    line-height: 1.7;
                    color: #34495e;
                }
                
                /* Certifications */
                .cert-item {
                    margin-bottom: 15px;
                }
                .cert-name {
                    font-size: 12px;
                    font-weight: 600;
                    color: #2c3e50;
                }
                .cert-details {
                    font-size: 11px;
                    color: #7f8c8d;
                }
                
            @media print {
                .two-column-template {
                    box-shadow: none;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        </style>
        <div class="two-column-template">
                <!-- Left Sidebar -->
                <div class="sidebar">
                    <!-- Contact Information -->
                    <div class="sidebar-section">
                        <div class="sidebar-title">Contact</div>
                        ${data.personal.phone ? `
                        <div class="contact-item">
                            <span class="contact-label">Phone</span>
                            ${data.personal.phone}
                        </div>
                        ` : ''}
                        ${data.personal.email ? `
                        <div class="contact-item">
                            <span class="contact-label">Email</span>
                            ${data.personal.email}
                        </div>
                        ` : ''}
                        ${data.personal.address ? `
                        <div class="contact-item">
                            <span class="contact-label">Address</span>
                            ${data.personal.address}
                        </div>
                        ` : ''}
                        ${data.personal.city ? `
                        <div class="contact-item">
                            <span class="contact-label">City</span>
                            ${data.personal.city}${data.personal.postcode ? `, ${data.personal.postcode}` : ''}
                        </div>
                        ` : ''}
                        ${data.personal.country ? `
                        <div class="contact-item">
                            <span class="contact-label">Country</span>
                            ${data.personal.country}
                        </div>
                        ` : ''}
                        ${data.personal.linkedin ? `
                        <div class="contact-item">
                            <span class="contact-label">LinkedIn</span>
                            ${data.personal.linkedin}
                        </div>
                        ` : ''}
                        ${data.personal.website ? `
                        <div class="contact-item">
                            <span class="contact-label">Website</span>
                            ${data.personal.website}
                        </div>
                        ` : ''}
                    </div>
                    
                    <!-- Skills -->
                    ${data.skills && data.skills.length > 0 ? `
                    <div class="sidebar-section">
                        <div class="sidebar-title">${t.skills || 'Skills'}</div>
                        <div>
                            ${data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- Languages -->
                    ${data.languages && data.languages.length > 0 ? `
                    <div class="sidebar-section">
                        <div class="sidebar-title">${t.languages || 'Languages'}</div>
                        ${data.languages.map(lang => `
                            <div class="language-item">
                                <div class="language-name">${lang.language}</div>
                                <div class="language-level">${lang.proficiency}</div>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                    
                    <!-- Additional Info -->
                    ${data.personal.birthDate || data.personal.nationality || data.personal.drivingLicense ? `
                    <div class="sidebar-section">
                        <div class="sidebar-title">Personal Info</div>
                        ${data.personal.birthDate ? `
                        <div class="contact-item">
                            <span class="contact-label">Birth Date</span>
                            ${data.personal.birthDate}
                        </div>
                        ` : ''}
                        ${data.personal.nationality ? `
                        <div class="contact-item">
                            <span class="contact-label">Nationality</span>
                            ${data.personal.nationality}
                        </div>
                        ` : ''}
                        ${data.personal.drivingLicense ? `
                        <div class="contact-item">
                            <span class="contact-label">License</span>
                            ${data.personal.drivingLicense}
                        </div>
                        ` : ''}
                    </div>
                    ` : ''}
                </div>
                
                <!-- Right Main Content -->
                <div class="main-content">
                    <!-- Header -->
                    <div class="header">
                        <div class="name">${data.personal.fullName || ''}</div>
                        <div class="job-title">${data.personal.title || ''}</div>
                    </div>
                    
                    <!-- Professional Summary -->
                    ${data.summary ? `
                    <div class="content-section">
                        <div class="section-title">${t.summary || 'Professional Summary'}</div>
                        <div class="summary-text">${data.summary}</div>
                    </div>
                    ` : ''}
                    
                    <!-- Work Experience -->
                    ${data.experience && data.experience.length > 0 ? `
                    <div class="content-section">
                        <div class="section-title">${t.experience || 'Work Experience'}</div>
                        ${data.experience.map(exp => `
                            <div class="item">
                                <div class="item-title">${exp.position || ''}</div>
                                <div class="item-subtitle">${exp.company || ''}${exp.location ? ` • ${exp.location}` : ''}</div>
                                <div class="item-meta">${exp.startDate || ''} - ${exp.current ? (t.present || 'Present') : (exp.endDate || '')}</div>
                                ${exp.description ? `<div class="item-description">${exp.description}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                    
                    <!-- Education -->
                    ${data.education && data.education.length > 0 ? `
                    <div class="content-section">
                        <div class="section-title">${t.education || 'Education'}</div>
                        ${data.education.map(edu => `
                            <div class="item">
                                <div class="item-title">${edu.degree || ''}</div>
                                <div class="item-subtitle">${edu.school || ''}${edu.location ? ` • ${edu.location}` : ''}</div>
                                ${!edu.hideDates ? `<div class="item-meta">${edu.startDate || ''} - ${edu.endDate || ''}</div>` : ''}
                                ${edu.description ? `<div class="item-description">${edu.description}</div>` : ''}
                                ${edu.extraInfo ? `<div class="item-description">${edu.extraInfo}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                    
                    <!-- Certifications -->
                    ${data.certifications && data.certifications.length > 0 ? `
                    <div class="content-section">
                        <div class="section-title">${t.certifications || 'Certifications'}</div>
                        ${data.certifications.map(cert => `
                            <div class="cert-item">
                                <div class="cert-name">${cert.name}</div>
                                <div class="cert-details">${cert.issuer} • ${cert.date}${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}</div>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                </div>
            </div>
    `;
}

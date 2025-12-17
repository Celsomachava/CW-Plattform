// PDF Template: Creative – Bold Two-Column Layout (only used for download)
import { CVData } from '@/lib/types';

interface Props {
    data: CVData;
    t: any;
}

export default function CreativeHTMLTemplate({ data, t }: Props) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
            <style>
                :root {
                    --accent-color: #6d54b0;
                    --text-color: #4a4a4a;
                    --bg-color: #fafafa;
                    --heading-color: #1a1a1a;
                }
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', -apple-system, sans-serif; }
            .creative-template { display: flex; min-height: 297mm; background: white; }
            .sidebar-creative { width: 38%; background: var(--accent-color); color: white; padding: 50px 35px; }
            .main-creative { width: 62%; padding: 50px 40px; background: #fafafa; }
            .photo-creative { width: 140px; height: 140px; border-radius: 70px; object-fit: cover; border: 5px solid rgba(255,255,255,0.3); margin: 0 auto 30px; display: block; }
            .name-creative { font-size: 30px; font-weight: bold; text-align: center; margin-bottom: 10px; }
            .title-creative { font-size: 14px; text-align: center; opacity: 0.9; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 35px; }
            .section-creative { margin-bottom: 30px; }
            .section-title-creative { font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid rgba(255,255,255,0.3); }
            .section-title-main-creative { font-size: 16px; font-weight: bold; color: var(--accent-color); text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 15px; padding-left: 15px; border-left: 4px solid var(--accent-color); }
            .contact-creative { margin-bottom: 12px; display: flex; align-items: center; gap: 10px; font-size: 11px; }
            .contact-creative i { font-size: 14px; opacity: 0.9; }
            .skill-creative { background: rgba(255,255,255,0.2); padding: 8px 14px; border-radius: 20px; display: inline-block; margin: 0 6px 8px 0; font-size: 11px; }
            .lang-creative { margin-bottom: 12px; }
            .lang-name-creative { font-size: 12px; font-weight: bold; }
            .lang-level-creative { font-size: 10px; opacity: 0.8; }
            .exp-creative { margin-bottom: 25px; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
            .exp-title-creative { font-size: 14px; font-weight: bold; color: #1a1a1a; margin-bottom: 5px; }
            .exp-company-creative { font-size: 12px; color: var(--accent-color); font-weight: 600; margin-bottom: 5px; }
            .exp-date-creative { font-size: 10px; color: #999; margin-bottom: 10px; }
            .exp-desc-creative { font-size: 11px; color: #4a4a4a; line-height: 1.6; }
        </style>
        <div class="creative-template">
            <div class="sidebar-creative">
                ${data.personal.photo ? `<img src="${data.personal.photo}" class="photo-creative" alt="Profile" />` : ''}
                <div class="name-creative">${data.personal.fullName}</div>
                <div class="title-creative">${data.personal.title}</div>
                
                <div class="section-creative">
                    <div class="section-title-creative">${t.contact}</div>
                    ${data.personal.phone ? `<div class="contact-creative"><i class="fa-solid fa-phone"></i> ${data.personal.phone}</div>` : ''}
                    ${data.personal.email ? `<div class="contact-creative"><i class="fa-solid fa-envelope"></i> ${data.personal.email}</div>` : ''}
                    ${data.personal.address ? `<div class="contact-creative"><i class="fa-solid fa-location-dot"></i> ${data.personal.address}</div>` : ''}
                    ${data.personal.linkedin ? `<div class="contact-creative"><i class="fa-brands fa-linkedin"></i> LinkedIn</div>` : ''}
                    ${data.personal.website ? `<div class="contact-creative"><i class="fa-solid fa-globe"></i> Website</div>` : ''}
                </div>
                
                ${data.skills.length > 0 ? `<div class="section-creative"><div class="section-title-creative">${t.skills}</div><div>${data.skills.map(skill => `<span class="skill-creative">${skill}</span>`).join('')}</div></div>` : ''}
                
                ${data.languages.length > 0 ? `<div class="section-creative"><div class="section-title-creative">${t.languages}</div>${data.languages.map(lang => `<div class="lang-creative"><div class="lang-name-creative">${lang.language}</div><div class="lang-level-creative">${lang.proficiency}</div></div>`).join('')}</div>` : ''}
                
                ${data.hobbies && data.hobbies.length > 0 ? `<div class="section-creative"><div class="section-title-creative">${t.hobbies || 'Hobbies'}</div><div>${data.hobbies.map(hobby => `<span class="skill-creative">${hobby}</span>`).join('')}</div></div>` : ''}
            </div>
            
            <div class="main-creative">
                ${data.summary ? `<div class="section-creative"><div class="section-title-main-creative">${t.summary}</div><div class="exp-desc-creative">${data.summary}</div></div>` : ''}
                
                ${data.experience.length > 0 ? `<div class="section-creative"><div class="section-title-main-creative">${t.experience}</div>${data.experience.map(exp => `<div class="exp-creative"><div class="exp-title-creative">${exp.position}</div><div class="exp-company-creative">${exp.company} | ${exp.location}</div><div class="exp-date-creative">${exp.startDate} - ${exp.current ? t.present : exp.endDate}</div><div class="exp-desc-creative">${exp.description}</div></div>`).join('')}</div>` : ''}
                
                ${data.education.length > 0 ? `<div class="section-creative"><div class="section-title-main-creative">${t.education}</div>${data.education.map(edu => `<div class="exp-creative"><div class="exp-title-creative">${edu.degree}</div><div class="exp-company-creative">${edu.school} | ${edu.location}</div>${!edu.hideDates ? `<div class="exp-date-creative">${edu.startDate} - ${edu.endDate}</div>` : ''}${edu.description ? `<div class="exp-desc-creative">${edu.description}</div>` : ''}</div>`).join('')}</div>` : ''}
                
                ${data.certifications.length > 0 ? `<div class="section-creative"><div class="section-title-main-creative">${t.certifications}</div>${data.certifications.map(cert => `<div class="exp-creative"><div class="exp-title-creative">${cert.name}</div><div class="exp-company-creative">${cert.issuer}</div><div class="exp-date-creative">${cert.date}</div></div>`).join('')}</div>` : ''}
            </div>
        </div>
        </body>
        </html>
    `;
}

import React from 'react'
import ModernTemplate from '../assets/templates/ModernTemplate'
import MinimalTemplate from '../assets/templates/MinimalTemplate';
import MinimalImageTemplate from '../assets/templates/MinimalImageTemplate';
import ClassicTemplate from '../assets/templates/ClassicTemplate';
import CreativeTemplate from '../assets/templates/CreativeTemplate';
import ProfessionalTemplate from '../assets/templates/ProfessionalTemplate';
import SimpleElegantTemplate from '../assets/templates/SimpleElegantTemplate';
import TwoColumnTemplate from '../assets/templates/TwoColumnTemplate';
import InfographicTemplate from '../assets/templates/InfoGraphic';
import TechProTemplate from '../assets/templates/TechProTemplate';
import GradientGlowTemplate from '../assets/templates/GradientGlowTemplate';
import SleekShadowTemplate from '../assets/templates/SleekShadowTemplate';

const ResumePreview = ({data,template,accentColor,classes=""}) => {
  
    const renderTemplate=()=>{
        switch(template){
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />;
            case 'creative':
                return <CreativeTemplate data={data} accentColor={accentColor} />;
            case 'professional':
                return <ProfessionalTemplate data={data} accentColor={accentColor} />
            case 'simpleElegant':
                return <SimpleElegantTemplate data={data} accentColor={accentColor} />
            case 'TwoColumn':
                return <TwoColumnTemplate data={data} accentColor={accentColor} />
            case 'InfoGraphic':
                return <InfographicTemplate data={data} accentColor={accentColor} />
            case 'TechPro':
                return <TechProTemplate data={data} accentColor={accentColor} />
            case 'GradientGlow':
                return <GradientGlowTemplate data={data} accentColor={accentColor} />
            case 'SleekShadow':
                return <SleekShadowTemplate data={data} accentColor={accentColor} />
            
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />;
        }
    }

    return (
    <div className='w-full bg-gray-100'>
        <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none "+classes}>
            {renderTemplate()}
        </div>
        <style jsx>
            {`
                @page{
                    size:letter;
                    margin:0;

                }
                    @media print{
                    html,body{
                    width:8.5in;
                    height:11in;
                    overflow:hidden;}
                    body *{
                        visibility:hidden;}
                        #resume-preview, #resume-preview *{
                            visibility:visible;
                        }
                        #resume-preview{
                            position:absolute;
                            left:0;
                            top:0;
                            width:100%;
                            height:auto;
                            margin:0;
                            padding:0;
                            box-shadow:none !important;
                            border:none !important;
            }

                    
                    }
                    `
            }

        </style>
      
    </div>
  )
}

export default ResumePreview

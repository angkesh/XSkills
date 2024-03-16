export function handleThemeChange(theme){
    localStorage.setItem('theme', theme);
    const themedContainer = document.querySelector("#main");
    const eduCard = document.querySelectorAll("#eduCardId");
    const projectCard = document.querySelectorAll("#projectCard");
    const bannerIcon = document.querySelectorAll(".bannerIcon");
    const projectIcon = document.querySelectorAll(".projectIcon");
    const footerIcon = document.querySelectorAll("#footerIconId");
    const projectDetailIcon = document.querySelectorAll(".projectDetailIcon");
    const courseIcon = document.querySelectorAll("#courseIcon");
    const nav = document.querySelector("#nav");
    const certificateCard = document.querySelectorAll("#certificateCard");
    const viewCertificateId = document.querySelectorAll("#viewCertificateId");
    
    if (theme === 'main'){
        themedContainer.className = "bgGradientMain" + " " + "root"
        nav.className = "navbar";
        for (var i = 0; i < eduCard.length; i++){
            eduCard[i].className = "eduCard" + " " + "bgEduCard";
        }
        for (var i = 0; i < projectCard.length; i++){
            projectCard[i].className = "projectCard" + " " + "bgProjectGradient" + " " + "group/main";
        }

        for (var i = 0; i < bannerIcon.length; i++){
            bannerIcon[i].className = "bannerIcon" + " " + "bg-color12 hover:bg-color13";
        }

        for (var i = 0; i < projectIcon.length; i++){
            projectIcon[i].className = "projectIcon" + " " + "bg-color12 hover:bg-color13" + " " + "shadow-shadowOne group/lang";;
        }

        for (var i = 0; i < projectDetailIcon.length; i++){
            projectDetailIcon[i].className = "projectDetailIcon" + " " + "bg-bodyColor";
        }

        for (var i = 0; i < courseIcon.length; i++){
            courseIcon[i].className = "courseIcon" + " " + "shadow-shadowOne group/lang";
        }

        for (var i = 0; i < footerIcon.length; i++){
            footerIcon[i].className = "footerIcon";
        }

        for (var i = 0; i < certificateCard.length; i++){
            certificateCard[i].className = "certificateCard" + " " + "bgProjectGradient";
        }

        for (var i = 0; i < viewCertificateId.length; i++){
            viewCertificateId[i].className = "viewCertificate" + " " + "bgProjectGradient";
        }
    }

    if (theme === 'theme-dark'){
        themedContainer.className = 'bg-bodyColor' + " " + theme;
        nav.className = "navbar"
        for (var i = 0; i < eduCard.length; i++){
            eduCard[i].className = "bgEduCard" + " " + "bgEduLight";
        }
        for (var i = 0; i < projectCard.length; i++){
            projectCard[i].className = "projectCard" + " " + "bgProjectLight" + " " + "group/main";
        }
        for (var i = 0; i < bannerIcon.length; i++){
            bannerIcon[i].className = "bannerIcon" + " " + "bgElementGradientLight";
        }
        for (var i = 0; i < projectIcon.length; i++){
            projectIcon[i].className = "projectIcon" + " " + "bgElementGradientLight" + " " + "shadow-shadowOne group/lang";;
        }

        for (var i = 0; i < projectDetailIcon.length; i++){
            projectDetailIcon[i].className = "projectDetailIcon" + " " + "bgElementGradientLight";
        }

        for (var i = 0; i < courseIcon.length; i++){
            courseIcon[i].className = "courseIcon" + " " + "bgElementGradientLight" + " " + "shadow-shadowOne group/lang";;
        }

        for (var i = 0; i < footerIcon.length; i++){
            footerIcon[i].className = "footerIconLight" + " " + "bgElementGradientLight";
        }
        for (var i = 0; i < certificateCard.length; i++){
            certificateCard[i].className = "certificateCard" + " " + "bgProjecLight";
        }

        for (var i = 0; i < viewCertificateId.length; i++){
            viewCertificateId[i].className = "viewCertificate" + " " + "bgProjectLight";
        }
    }

    if (theme === 'theme-blue'){
        themedContainer.className =  "bgGradientBlue" + " " + theme;
        nav.className = "navbar";
        for (var i = 0; i < eduCard.length; i++){
            eduCard[i].className = "bgEduGradientBlue" + " " + "bgEduCard";
        }
        for (var i = 0; i < projectCard.length; i++){
            projectCard[i].className = "projectCard" + " " + "bgProjectGradient" + " " + "group/main";
        }

        for (var i = 0; i < bannerIcon.length; i++){
            bannerIcon[i].className = "bannerIcon" + " " + "bg-color12 hover:bg-color13";
        }

        for (var i = 0; i < projectIcon.length; i++){
            projectIcon[i].className = "projectIcon" + " " + "bg-color12 hover:bg-color13" + " " + "shadow-shadowOne group/lang";
        }

        for (var i = 0; i < projectDetailIcon.length; i++){
            projectDetailIcon[i].className = "projectDetailIcon" + " " + "bg-bodyColor";
        }

        for (var i = 0; i < courseIcon.length; i++){
            courseIcon[i].className = "courseIcon" + " " + "shadow-shadowOne group/lang";;
        }

        for (var i = 0; i < footerIcon.length; i++){
            footerIcon[i].className = "footerIcon";
        }
        for (var i = 0; i < certificateCard.length; i++){
            certificateCard[i].className = "certificateCard" + " " + "bgProjectGradient";
        }

        for (var i = 0; i < viewCertificateId.length; i++){
            viewCertificateId[i].className = "viewCertificate" + " " + "bgProjectGradient";
        }
    }


    
}
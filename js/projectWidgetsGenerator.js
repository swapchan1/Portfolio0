(function(){
    
    var widgetGeneratorApp = angular.module('ProjectWidgetsGenerator', []);
    
    widgetGeneratorApp.controller('ProjectWidgetsController', function() {
        
        this.posts = projectWidgets;
        this.numOfPosts = 4;
        this.view = 1;
        
        this.setView = function(val) {
            this.view = val;
        };
        
        this.isView = function(val) {
            return this.view === val;
        };
        
    });
    
    var projectWidgets = 
        [
            {
                categoryExp: "widgetCntrl.isView(2) || widgetCntrl.isView(1)",
                widgetTitle: "In-Campus Locator",
                widgetDescription: 'A Smart Kitchen Experience',
                pageLink:"campusnav.html" ,
                widgetImage:"assets/images/portfolio/campusnav/Logo.PNG"
            },
            
            {
                categoryExp: "widgetCntrl.isView(3) || widgetCntrl.isView(1)",
                widgetTitle: "DinnerCall",
                widgetDescription: 'UX Design & Evaluation',
                pageLink: "dinnercall.html",
                widgetImage:"assets/images/portfolio/campusnav/Logo.PNG"
            },
            
            {
                categoryExp: "widgetCntrl.isView(4) || widgetCntrl.isView(1)",
                widgetTitle: "Musical Moods - Visual Analytics",
                widgetDescription: 'Arduino Physical Prototype',
                pageLink: "musicalmoods.html",
                widgetImage:"assets/images/portfolio/campusnav/Logo.PNG"
            },
            
            {
                categoryExp: "widgetCntrl.isView(5) || widgetCntrl.isView(1)",
                widgetTitle: "EduAssist",
                widgetDescription: 'HCI Research Study',
                pageLink: "EduAssist.html",
                widgetImage:"assets/images/portfolio/campusnav/Logo.PNG"
            }
        ];
})();

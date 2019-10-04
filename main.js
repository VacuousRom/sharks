// shark-section-up space-section-down junk-section-down

class UI {
    constructor() {
        this.sharkSection = document.querySelector('.shark-section');
        this.spaceSection = document.querySelector('.space-section');
        this.junkSection = document.querySelector('.junk-section');
        this.slideInSharkSection = document.querySelector('.shark-content');
        this.slideInSpaceSection = document.querySelector('.space-content');
        this.slideInJunkSection = document.querySelector('.junk-content');
    }

    operateSections() {
        this.sharkOpen = false;
        this.spaceOpen = false;
        this.junkOpen = false;
        
        this.sharkSection.addEventListener('click', () => {
            
            if (this.sharkOpen) {
                this.spaceSection.classList.remove('space-section-down');
                this.junkSection.classList.remove('junk-section-down');
                this.slideInSharkSection.classList.remove('slide-in-content-show');               
                this.sharkOpen = false;
            } else {
            this.spaceSection.classList.add('space-section-down');
            this.junkSection.classList.add('junk-section-down');
            this.slideInSharkSection.classList.add('slide-in-content-show'); 
            this.sharkOpen = true;
            }
        
        });
        this.spaceSection.addEventListener('click', () => {
            
            if (this.spaceOpen) {
                this.sharkSection.classList.remove('shark-section-up');
                this.junkSection.classList.remove('junk-section-down');
                this.spaceSection.classList.remove('space-section-top');
                this.slideInSpaceSection.classList.remove('slide-in-content-show');
                this.spaceOpen = false;
            } else {
            this.sharkSection.classList.add('shark-section-up');
            this.junkSection.classList.add('junk-section-down');
            this.spaceSection.classList.add('space-section-top');
            this.slideInSpaceSection.classList.add('slide-in-content-show');
            this.spaceOpen = true;
            }
        
        })
        this.junkSection.addEventListener('click', () => {
            
            if (this.junkOpen) {
                this.sharkSection.classList.remove('shark-section-up');
                this.junkSection.classList.remove('junk-section-top');
                this.spaceSection.classList.remove('space-section-down');
                this.slideInJunkSection.classList.remove('slide-in-content-show');
                this.junkOpen = false;
            } else {
            this.sharkSection.classList.add('shark-section-up');
            this.junkSection.classList.add('junk-section-top');
            this.spaceSection.classList.add('space-section-down');
            this.slideInJunkSection.classList.add('slide-in-content-show');
            this.junkOpen = true;
            }
        
        })
    
}
}

let interface = new UI;
interface.operateSections();

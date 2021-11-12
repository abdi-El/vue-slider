/*
 * Vue Slider
 */
const app = new Vue({
    el: '#root',
    data:{
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        isActive: 0,
    },
    created(){ setInterval(()=>{
        this.clickNext();
    },3000)},
    methods:{
        clickPrev(){
            if(this.isActive === 0){
                this.isActive = 4;
            }else{
                this.isActive--;
            }
        },
        clickNext(){
            if(this.isActive === 4){
                this.isActive = 0;
            }else{
                this.isActive++;
            }
        },
        chosenSlide(slideIndex){
            this.isActive = slideIndex;
        }
    }
    
});
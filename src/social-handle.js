
import jquery from 'jquery';
const $ = jquery;

let socials = [
    {
        name: "facebook", 
        url: "https://www.facebook.com/sarthak.pokharel.official",
        icon: "social/facebook72.png"
    },
    {
        name: "github", 
        url: "https://github.com/sarthak-pokharel",
        icon: "social/GitHub-Mark-120px-plus.png"
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/sarthak.zzz/",
        icon: "social/icons8-instagram-100.png"
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sarthak-pokhrel-6318821a1/",
        icon: "social/icons8-linkedin-circled-100.png"
    },
    {
        name: "gmail",
        url: "mailto:sarthak.whenever@gmail.com",
        icon: "social/logo-gmail-9981-128.png"
    },
    
]


function social_handle() {
    let icon_list_cont = $(".social-icons-list");
    icon_state.elem_handler = icon_list_cont;
    icon_state.container_handler = $('.social');
    icon_state.open = !!(+icon_list_cont[0].getAttribute('open'))
    console.log(icon_list_cont)
    icon_state.update();
    let hov_icon = $(".social-hover-icon");
    socials.forEach(x=>icon_list_cont.append(create_social_icon(x)))

    hov_icon.on("click",function(){
        toggle_icon_state();
    });
    $(".social-icon").on('click', function(){
        window.open($(this).data('url'),"blank")
    })
}
function create_social_icon(info){
    let social_el = (function(){
        let el = document.createElement("div");
        el.classList.add("social-icon");
        el.title = info.name;
        el.setAttribute('data-url', info.url);
        let img = document.createElement("img");
        el.appendChild(img);
        img.src = info.icon;
        return el;
    })();
    return social_el;
}


const icon_state = {
    open: false,
    elem_handler: null,
    container_handler: null,
    _open(){
        this.open = true;
        this.container_handler.animate({'top': '0%'})
        this.elem_handler.fadeIn();
    },
    close(){
        this.open = false;
        this.container_handler.animate({'top': '50%'})
        this.elem_handler.fadeOut();
    },
    toggle(){
        this.open = !this.open;
        this.elem_handler.attr('open',Math.floor(this.open).toString());
        this.update();
    },
    update(){
        console.log(this);
        // debugger 
        this.open? this._open(): this.close();
    }
}

function toggle_icon_state(){
    icon_state.toggle();
}



export {social_handle};
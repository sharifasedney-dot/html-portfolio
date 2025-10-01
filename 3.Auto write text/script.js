
const text = "Hi Lila! doesn't this look cool! I made it just for you =] It sucks to hear about IND, but it will be okay and we can still sit together here with Kimmie <3"

let index = 0;

function writeText(){
    document.body.innerText = text.slice (0, index)

    index++;

    if (index > text.length -1) {
        index = 0;
    }
}

setInterval(writeText, 100);
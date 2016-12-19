//import * as $ from 'jquery';
//import 'notification';

function notify(): void {
    if(!("Notification" in window)) {
        return;
    }

    if(Notification.permission === "granted") {
        hello();
    } else {
        Notification.requestPermission((permission: string) => {
            if(permission !== "granted") {
                return;
            }
            hello();
        })
    }
}

function hello() {
    var notification: Notification = new Notification(
        "Hi Notify!",
        {
            body: "こんばんわ～", 
            icon: "https://pbs.twimg.com/profile_images/542772769365049344/qr6FJuUn.png"
        }
    );
    setTimeout(notification.close.bind(notification), 5000);    
}

//$(() => {
    notify();
//});
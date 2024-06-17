function scheduleTimeouts() {
    const messages = ["Message 1", "Message 2", "Message 3"];
    const delays = [1000, 2000, 3000];

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const delay = delays[i];

        setTimeout(function(msg) {
            console.log(msg);
        }, delay, message);
    }
}


scheduleTimeouts();

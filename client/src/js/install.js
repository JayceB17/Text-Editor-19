const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    console.log("hello")
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    console.log('installed')
    window.deferredPrompt = null;
});
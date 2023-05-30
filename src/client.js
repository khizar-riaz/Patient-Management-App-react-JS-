import { get } from 'idb-keyval';

const publicVapidKey = process.env.REACT_APP_PUBLIC_VAPID_KEY

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}


async function getServiceWorker() {
    if ('serviceWorker' in navigator) {
        const regSW = await navigator.serviceWorker.getRegistration('/service-worker.js');
        return regSW;
    } else {
        return null;
    }
}

async function subscribeToNotificationService(regSW) {
    let subscription
    try {
        subscription = await regSW.pushManager.getSubscription();
            subscription = await regSW.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            })
            const tokenStr = await get("JWT")
            await fetch(process.env.REACT_APP_URL + '/api/v1/subscribe', {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                    "content-type": "application/json",
                    "Authorization": `${tokenStr.token}`
                }
            });

        return "success"
    } catch (error) {
        return "error"
    }
}

export { subscribeToNotificationService, getServiceWorker };
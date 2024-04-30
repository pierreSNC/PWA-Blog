import {useState} from "react";
import axios from "axios";

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`).then(function(registration) {
        console.log('ServiceWorker registration successful with scope:')
        console.log(registration.scope)
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
}

// Fonction pour convertir la clé VAPID de base64 en Uint8Array
function urlBase64ToUint8Array(base64String: any) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
const requestNotificationPermission = async () => {
  if (Notification.permission === 'granted') {
    console.log('Permission déjà accordée.');
    checkSubscription();
  } else if (Notification.permission === 'default') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      checkSubscription();
    } else {
      console.log('Notification permission denied.');
    }
  } else {
    console.log('Notification permission denied.');
  }
}

const checkSubscription = async () => {
  const registration:any = await navigator.serviceWorker.ready;
  const existingSubscription = await registration.pushManager.getSubscription();

  if (existingSubscription) {
    console.log('Utilisateur déjà abonné.');
    return;
  }

  subscribeUser(registration);
}

const subscribeUser = async (registration:any) => {

  const vapidPublicKey = 'BEaRqXDrifbTXtEIMTasa0u3XpL6FDUORDt8a--5qLIu_bsMg90R-QkiviIJmjCF-LHQrXJSzHVoTq5UE_vwJqg';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey
    });
    console.log('Abonnement réussi :', JSON.stringify(subscription));
    saveSubscription(subscription);
  } catch (error) {
    console.error('Abonnement échoué :', error);
  }
}

const saveSubscription = async (subscription:any) => {
  try {
    const response = await axios.post('http://localhost:3000/subscription', {
      subscription_json: JSON.stringify(subscription)
    });
    console.log('Subscription data saved to database:', response);
  } catch (error) {
    console.error('Failed to save subscription:', error);
  }
}


requestNotificationPermission();

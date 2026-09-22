// Development environment configuration.
// NOTE: the EmailJS "publicKey" is designed by EmailJS to be public — it ships in the
// client bundle no matter where it's defined. Moving it here only centralizes config
// for maintainability; real access control is set in the EmailJS dashboard (allowed
// domains). If you ever need the key to never appear in client code, that requires a
// backend/serverless proxy instead of the browser SDK.
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_venki',
    templateId: 'template_ftccg7v',
    publicKey: 'jwwjWXhG84a2Xx-ML',
  },
};

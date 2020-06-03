import { I18n } from 'aws-amplify';
export const signUpConfig = {
    hiddenDefaults: [
        'phone_number',
        'email'
    ],
};
const authScreenLabels = {
    en: {
        'Sign in to your account': 'Protected page, please log in',
        'Enter your username': 'Enter your email',
        'Username': 'Email',
    }
};
I18n.setLanguage('en');
I18n.putVocabularies(authScreenLabels);

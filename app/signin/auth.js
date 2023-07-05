import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: "1087280503400-7ue3gsvdou5sjrr0dccrgae07k5lv398.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    
  ],
};

export default NextAuth(options);
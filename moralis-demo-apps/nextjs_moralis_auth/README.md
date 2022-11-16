
# Moralis NextJS Auth Demo App

This folder has been copied from https://github.com/MoralisWeb3/demo-apps/tree/main/nextjs_moralis_auth (Aug 16, 2022 version).

Documentation available at https://docs.moralis.io/docs/sign-in-with-metamask

- First time: 

    Using `.env.local.example` as a template, create a file `.env.local` that contains **Your API Key**, which should be available at [this url](https://admin.moralis.io/web3apis).

    In this folder run

    ```
    npm install moralis next-auth axios
    npm install wagmi ethers
    ```

- Each time you start the server run

    ```
    npm run dev
    ```
    
    and then paste the url [`http://localhost:3000/signin`](http://localhost:3000/    signin) in your browser. For testing, follow the steps outlined at https://docs.    moralis.io/docs/sign-in-with-metamask
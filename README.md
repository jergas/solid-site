# Solid-Site

This is a sveltekit app that takes a landing.json file with a certain format (a list of entries) and compiles it to a static website.

The landing.json file needs to be provided, along with the directory containing the images, and the directory containing the content the index will link to. A "static" directory also needs to be provided, with the images of the logo and the menu icon.


## Setup & Installation

To set up the environment for development:

1.  **Install Dependencies:**
    ```sh
    npm install
    ```

2.  **Initialize Project Pages:**
    This script generates the necessary route files based on your `landing.json`, `menu/`, and `work/` directories.
    ```sh
    node init-pages.js
    ```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

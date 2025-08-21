# Adurite Astro

A new version of Adurite, based on <a href="https://github.com/UseInterstellar/Interstellar-Astro">Interstellar.</a>

# Deployment

To deploy Adurite on your server, follow these steps:

#### 1. Clone the Repository

First, clone the **Adurite** repository to your server:

```bash
git clone https://github.com/adurite-network/Adurite-Astro
cd Adurite
```

#### 2. Install Dependencies and Start the Project

Once you've cloned the repository, install the required dependencies and start the application:

```bash
pnpm install && pnpm start
```

This will install all the necessary dependencies and start the application in production mode.

# Development

If you are developing for Adurite , use the following commands:

```bash
pnpm install && pnpm dev
```

This will install dependencies and start the development server, which will automatically reload when you make changes to the code.

#### Enabling the Astro toolbar

To enable the Astro development toolbar, run the following command before starting the server.

```bash
astro preferences enable --global devToolbar && astro dev
```

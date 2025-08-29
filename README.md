
<h4 align="center"><a href="links.md"> Click here for official links </a></h4>
<h1 align="center"><img src="public/assets/media/icons/favicon.png" height="100px" align="center"></img><img></img><img src="name.png" height="250px" align="center"></img></h1>
<p align="center">Adurite is an unblocked games website with over 300 games, 50 apps, a fast, reliable proxy with emulator support, and more.</p>
<p align="center"><img src="fullpage.png" width="900px"></img></p>
<p align="center">If you fork this repository, please consider starring!</p>

## Features
* about:blank
* Proxy
* 300+ games
* 50+ apps
* Custom cloaks
* Brawl Stars, Roblox, Clash Royale, and more!
* Wisp + Epoxy technology

### Proxy Support
* easyfun.gg
* Google
* Youtube
* Discord
* TikTok
* Crazygames
* Cool Math Games
* And more!

## Releases
To get releases for easy local deployment, go to the releases tab. Each release will be formatted as `major.minor.patch`. So, if it was major version 4, minor version 2, and patch 7, the tag would be `v4.2.7`.

## Deployment

### Option 1: Vercel
To deploy using Vercel, either use the button or follow the cloning steps below.

#### Using the button
Simple, just click the button. <br><br>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadurite-network%2FAdurite&project-name=adurite&repository-name=Adurite&demo-title=Adurite&demo-description=A%20Vercel-deployed%20Adurite%20website.&demo-url=https%3A%2F%2Fuseadurite.vercel.app%2F&demo-image=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F185982685%3Fs%3D200%26v%3D4)

<hr>

#### Manually cloning
Go to Vercel, hit New Project, then enter this repository's URL into the 3rd Party URL slot. Then, follow the steps to deploy.

### Option 2: Github Codespaces / Local Deployment

#### Before the install: If you need to install PNPM

> [!NOTE]
> If you have PNPM already installed, you can safely skip this step

First, make sure you have NPM installed. If you don't, head over to https://nodejs.org/ and grab their installer. **NPM comes with Node.**

Next, run the following command:

```bash
npm i pnpm -g
```

> [!CAUTION]
> If you do not include `-g`, this will only install PNPM to the current location selected (typically `C:`). You *must* include `-g`

This will install PNPM on your computer for all of your projects and locations. You can now move on to the install!
#### 1. Clone the Repository

First, clone the **Adurite** repository to your server:

```bash
git clone https://github.com/adurite-network/Adurite
cd Adurite
```

#### 2. Install Dependencies and Start the Project

Once you've cloned the repository, install the required dependencies and start the application:

```bash
pnpm install && pnpm start
```

> [!IMPORTANT]
> You may use your package manager of choice (NPM, Yarn, Bun, etc.), but there is no guarantee it will work with Adurite. For compatibility, please use PNPM. Installing PNPM can be found in the guide above.

This will install all the necessary dependencies and start the application in production mode.

## Development

If you are developing for Adurite, use the following commands:

```bash
pnpm install && pnpm dev
```

This will install dependencies and start the development server, which will automatically reload when you make changes to the code.

#### Enabling/Disabling the Astro toolbar

To enable/disable the Astro development toolbar, run the following command to enable/disable and start the server.

```bash
astro preferences < enable | disable > --global devToolbar && astro dev # Choose either enable or disable, do NOT just copy this command and execute.
```

> [!NOTE]
> The Astro Development Toolbar will be enabled by default on every startup. If you wish to remove this functionality, then go to the `package.json` and remove the line causing this.

<hr>

###### This website is based on <a href="https://github.com/UseInterstellar/Interstellar-Astro">Interstellar.</a>

###### Thanks to <a href="https://github.com/titaniumnetwork-dev/">Titanium Network</a> for Ultraviolet, <a href="https://github.com/corn-unblocked/">Corn Unblocked</a> for a list of free Wisp servers, and <a href="https://github.com/mercuryworkshop/">Mercury Workshop</a> for Epoxy

###### made with <3 by <a href="https://github.com/cl1pped">cl1pped</a> (drop a follow)

# DO TOday

## Introduction

This is a simple lightweight to-do app I am designing out of my own necessity both for the purpose of better maintaining tasks that I need to complete daily and also to practice my newer web development technologies.

## Requirements

To run this app in your local environment you need to have Node.js installed in your system.

- For Ubuntu or Debian distributions from Nodesource PPA repo

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs
```

- For Arch Linux distributions

```bash
sudo pacman -Syu nodejs
sudo pacman -Syu npm
```

- For Red Hat distributions

```bash
sudo yum install --assumeyes epel-release
sudo yum install --assumeyes nodejs
```

- For Windows  

Go to <https://nodejs.org> and download either the LTS or current version of node and use the installer.

- For OSX

Go to <https://nodejs.org> and download either the LTS or current version of node and use the installer.

## Local Execution

For using this app in your local environment, follow these steps on your system

- Clone the repository into your local system

```git
git clone https://github.com/coderboy53/DO-TOday.git
```

- Move into the cloned directory and the frontend directory

```bash
cd DO-TOday
cd client
```

- Start the development server

```bash
npm run dev
```

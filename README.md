# Purchase Reimbursement App

## What is the use of this Repo

This is a simple ReactJS project which demonstrates the following
1. Allow an employee to submit a receipt for reimbursement
2. Make HTTP calls to the back-end API service

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start	
```

The React Application Runs on **localhost:3000**


# node-server for the API

> Node.js makes it easy to create a folder-based web server using JavaScript


## Windows

In Windows, execute Node and npm commands in Powershell as Administrator,
typically in the the root project folder.

## Start your Server

Start your server with the node command followed by the name of the JavaScript file.

```PowerShell
node server.js
```

## Open a Browser Client to test if the node server started successfully

https://github.com/vimalsaifudin/purchase-reimbursement

Open a web browser and go to the URL: <http://localhost:8080/>.

# If Node server is not installed please follow the instructions below

## Recommended Install Option For Windows Users

- Add ["Open PowerShell here as Administrator"](https://www.tenforums.com/tutorials/60177-add-open-powershell-window-here-administrator-windows-10-a.html).
- Install [Chocolatey](https://chocolatey.org/) windows package manager

```Powershell
choco install nodejs -y
choco upgrade all -y
```

## OR Install Node.js the traditional way

1. Go to the Node.js website and follow the instructions to install.
2. Verify installation. Open Powershell in your working folder and run:

```PowerShell
node -v
npm -v




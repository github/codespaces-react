{
  "image": "mcr.microsoft.com/devcontainers/universal:2",
  "hostRequirements": {
    "cpus": 4
  },
  "waitFor": "onCreateCommand",
  "updateContentCommand": "npm install",
  "postCreateCommand": "",
  "postAttachCommand": {
    "server": "npm start"
  },
  "customizations": {
    "codespaces": {
      "openFiles": [
        "src/App.js"
      ]
    }
  },
  "portsAttributes": {
    "3000": {
      "label": "Application",
      "onAutoForward": "openPreview"
    }
  },
  "forwardPorts": [3000]
}

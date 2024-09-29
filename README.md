# Progressa Angular

## Requirements

- **Node**: 20^
- **Angular**: 18.2.6^

## Setup

### Node Installation

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) (Node Version Manager).
2. Use the command line interface (CLI) to install Node:

  - Install Node (recommended version: 20):

    ``` bash
    nvm install 20 && nvm use 20
    ```
      
  - Verify the installation:

    ``` bash
    node --version
    ```

### Yarn Installation (optional)

1. If `yarn` package manager is preferred, you must install it through `npm`:

    ``` bash
    npm install -g yarn
    ```

### Angular Installation

1. Use the command line interface (CLI) to install Angular:

    ``` bash
    npm install -g @angular/cli@18
    ```

### Install Dependencies

1. Navigate to the root folder of the repository.
2. Install dependencies using `npm` or `yarn`:

    - npm:

    ``` bash
    npm install
    ```

    - yarn:
    
    ``` bash
    yarn install
    ```

   Note that you must use one of them, you should never combine these package managers.

## Run Server

1. Navigate to the root folder of the repository.
2. Run the server using `npm` or `yarn`:

    - npm:

    ``` bash
    npm start
    ```

    - yarn:

    ``` bash
    yarn start
    ```

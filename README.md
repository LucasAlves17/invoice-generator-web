# Invoice Generator Web

This is a Front-end project that allow to generate a token, login with this token after email confirmation, create and navigate through invoices, the Back-end to this project is in [this repository](https://github.com/LucasAlves17/invoice-generator).

Note: Please don't care too much about styling, it isn't my best skill 😬, at least you can test all the functionality of the api

<table>
  <tr>
    <td>Node version</td>
    <td>
      v18.13.0
    </td>
  </tr>
</table>

## Initial settings to run the project

```bash
# clone the project
git clone git@github.com:LucasAlves17/invoice-generator-web.git

# enter the cloned directory
cd invoice-generator-web

# install dependencies
npm install

# run the project
npm start
```

The front-end is available at `http://localhost:3001`.

## Packages

In this project the following packages were used:

- [jsPdf](https://github.com/parallax/jsPDF), to create pdf that you can download;
- [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/), to start a server;

### Future

This project has some features to improve such as:

- style;
- tests;
- improve the pdf generation;
- some fields validation, like email.

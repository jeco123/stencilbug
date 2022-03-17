This project concerns the issue [bug: Failed to execute 'removeChild' on 'Node'](https://github.com/ionic-team/stencil/issues/3278).

First analysis:

- **works** when shadow is true
- **does not work** when shadow is false

In our project, we do not and cannot use shadow.

```sh
# install
yarn

#build
yarn build

#start react app
yarn start:app
```

> The application is on http://localhost:3000



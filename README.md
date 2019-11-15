# React Cli 2 🔥🔥🔥

Simple library without dependencies

Tested in NOdeJS v12.13.0

## 🤘 Features

### Create Component
> write the name with kebak-case style

- cmd: `react-cli-2 create component <name>`
- cmd (short): `react-cli-2 c c <name>`

#### Example
`react-cli-2 create component card`

#### Produce
```
📁 card
    📄 Card.jsx // React component
    📄 Card.test.jsx // Initial test React component
    📄 Card.css // Style component
```

### Create Component class based

- cmd: `react-cli-2 create component-class <name>`
- cmd (short): `react-cli-2 c cc <name>`

#### Example
`react-cli-2 create component-class menu`

#### Produce
```
📁 card
    📄 Card.jsx // React component
    📄 Card.test.jsx // Initial test React component
    📄 Card.css // Style component
```

### Create Redux Module

> write the name with kebak-case style

> write the initial-action with kebak-case style

- cmd: `react-cli-2 create module-redux <name>:<initial-action>`
- cmd (short): `react-cli-2 c mr <name>:<initial-action>`

#### Example
`react-cli-2 create module-redux user:find-all`

#### Produce
```
📁 user
    📄 const.js // define const module
    📄 reducer.findAll.js // reducer with initlaState and 3 case (start/success/error)
    📄 actions.js // Actions Sync and Async
    📄 index.js // import all reducer and export combine reducers
```
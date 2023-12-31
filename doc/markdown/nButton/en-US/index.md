# Button
To trigger an operation.

## When To Use
A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Examples

### Basic use
:::demo Use 'type', 'status',' shape ', etc., to define the style of the button.
```html
<template>
  <div>
    <n-button type="default">Default</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="link">Link</n-button>
    <n-button type="ghost">Ghost</n-button>
    <n-button type="delicate">Delicate</n-button>
  </div>
  <div>
    <n-button type="primary" status="success">success</n-button>
    <n-button type="primary" status="info">info</n-button>
    <n-button type="primary" status="warning">warning</n-button>
    <n-button type="primary" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="primary" shape="square">square</n-button>
    <n-button type="primary" shape="square" icon="icon-search"></n-button>
    <n-button type="primary" shape="round">round</n-button>
    <n-button type="primary" shape="circle" icon="icon-home"></n-button>
  </div>
</template>
```
:::

### Button type
:::demo There are 5 types of buttons: default button, home button, link button, ghost button, delicate button.
```html
<template>
   <n-button>Default</n-button>
    <n-button type="primary" @click="handleClick">
      Primary
    </n-button>
    <n-button type="link">
      Link
    </n-button>
    <n-button type="ghost">
      Ghost
    </n-button>
    <n-button type="delicate">
      Delicate
    </n-button>
</template>
<script>
export default {
  methods: {
    handleClick () {
      alert('Ninecat')
    }
  }
}
</script>

```
:::

### Button status
:::demo There are 4 status of buttons：`success`、`info`、`warning`、`danger`.
```html
<template>
  <div>
    <n-button type="default" status="success">success</n-button>
    <n-button type="default" status="info">info</n-button>
    <n-button type="default" status="warning">warning</n-button>
    <n-button type="default" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="primary" status="success">success</n-button>
    <n-button type="primary" status="info">info</n-button>
    <n-button type="primary" status="warning">warning</n-button>
    <n-button type="primary" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="link" status="success">success</n-button>
    <n-button type="link" status="info">info</n-button>
    <n-button type="link" status="warning">warning</n-button>
    <n-button type="link" status="danger">danger</n-button>
  </div>
  <div>
    <n-button type="ghost" status="success">success</n-button>
    <n-button type="ghost" status="info">info</n-button>
    <n-button type="ghost" status="warning">warning</n-button>
    <n-button type="ghost" status="danger">danger</n-button>
  </div>
</template>
```

:::

### Button shape
:::demo There are 3 shape of buttons:`square`、`round`、`circle`.
```html
<template>
    <n-button type="primary" shape="square">square</n-button>
    <n-button type="primary" shape="square" icon="icon-search"></n-button>
    <n-button type="primary" shape="round">round</n-button>
    <n-button type="primary" shape="circle" icon="icon-home"></n-button>
</template>
```
:::

### Button size
:::demo There are 4 size of buttons:`xs`、`ms`、`md`、`lg`,default is`md`.
```html
<template>
  <n-button size="xs">
    xs
  </n-button>
  <n-button size="sm">
    sm
  </n-button>
  <n-button size="md">
    md
  </n-button>
  <n-button size="lg">
    lg
  </n-button>
</template>
```
:::

### Icon button

:::demo When you need to embed an Icon in a Button, you can set the icon property or use the Icon component directly in the Button.
```html
<template>
   <n-button icon="icon-home" />
   <n-button><n-icon name="icon-home" /></n-button>
   <n-button icon="icon-home" type="primary"/>
   <n-button icon="icon-home" type="link"/>
</template>
```
:::

### Loading button

:::demo Add the loading attribute to make the button in the loading state. Click the last two buttons to enter the loading state.
```html
<template>
  <n-button :loading="true"></n-button>
  <n-button :loading="true">loading</n-button>
  <n-button :loading="true" type="primary">loading</n-button>
  <n-button :loading="true" type="link">loading</n-button>
  <n-button :loading="true" type="delicate">loading</n-button>
</template>
```
:::

### Disable button

:::demo Adding the disabled attribute will make the button unavailable and the button style will change.
```html
<template>
  <n-button :disabled="true">disable</n-button>
</template>
```
:::


### Button combinations

:::demo You can put multiple Buttons in a n-button-group container.
```html
<template>
  <n-button-group>
    <n-button type="primary">Primary 1</n-button>
    <n-button type="primary">Primary 2</n-button>
  </n-button-group>
  <n-button-group>
    <n-button>Default 1</n-button>
    <n-button>Default 2</n-button>
  </n-button-group>
  <n-button-group>
    <n-button type="primary">Primary 1</n-button>
    <n-button type="primary">Primary 2</n-button>
    <n-button type="primary">Primary 3</n-button>
  </n-button-group>
</template>
```
:::


### API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | can be set to `default`,`primary`,`link`,`ghost`,`delicate` | String | default |
| status | can be set to `success`,`info`,`warning`,`danger` | String |  |
| shape | can be set to `square`,`round`,`circle` | String | square |
| size | can be set to `xs`,`ms`,`md`,`lg` | String | md |
| icon | Icon button, selectable just like the value of the icon | String |  |
| loading    | set the loading status of button | Boolean     | false |
| disabled    | disabled state of button | Boolean     |  |
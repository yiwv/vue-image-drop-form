
# Image Form Vue

A simple Vue 3 component for image file selection and preview.

## Installation

```bash
npm install image-form-vue
```

## Usage

Here is a simple example:

```javascript
import ImageForm from 'image-form-vue'

// in your component
<ImageForm label="Select File" @change="handleFileChange" />
```

## Props

- `label`: The label for the file input.

## Events

- `change`: Emitted when a file is selected or dropped. The selected `File` object is passed as an argument.

## Running Tests

To run tests, execute the following command:

```bash
npm run test
```


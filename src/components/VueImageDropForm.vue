<script setup>
import { ref, onMounted, computed, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  label: { type: String, default: 'Select file' }
})
const fileInputRef = ref(null)
const fileDropzoneRef = ref(null)
const imageFile = ref(null)

const selectFile = (fileList) => {
  emit('change', Array.from(fileList)[0])
  if (imageUrl.value !== '') {
    URL.revokeObjectURL(imageUrl)
  }
  imageFile.value = Array.from(fileList)[0]
}

const imageUrl = computed(() => {
  if (!imageFile.value) {
    return ''
  }
  return URL.createObjectURL(imageFile.value)
})

onMounted(() => {
  let dropzone = fileDropzoneRef.value
  let fileInput = fileInputRef.value

  if (dropzone) {
    dropzone.addEventListener('dragenter', e => {
      e.preventDefault()
    })

    dropzone.addEventListener('dragleave', e => {
      e.preventDefault()
    })

    dropzone.addEventListener('dragover', e => {
      e.preventDefault()
    })

    dropzone.addEventListener('drop', e => {
      e.preventDefault()
      if (e.dataTransfer) {
        selectFile(e.dataTransfer.files)
      }
    })

    dropzone.addEventListener('click', e => {
      e.preventDefault()
      if (fileInput) {
        fileInput.click()
      }
    })

    if (fileInput) {
      fileInput.addEventListener('change', e => {
        if (e.target.files) {
          selectFile(e.target.files)
        }
      })
    }
  }
})
</script>

<template>
  <div>
    <div
      ref="fileDropzoneRef"
      class="file-dropzone"
    >
      <div
        v-if="!imageUrl"
        class="select-label"
      >
        {{ props.label }}
      </div>
      <div
        v-if="imageUrl"
        class="image-wrapper"
      >
        <img
          :src="imageUrl"
          class="image-preview"
        >
      </div>
    </div>
    <input
      ref="fileInputRef"
      type="file"
      class="file-input"
      @change="fileChanged"
    >
  </div>
</template>

<style scoped>
.file-dropzone {
  display: flex;
  cursor: pointer;
  color: grey;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  border: solid 1px grey;
  height: 200px;
  width: 100%;
  justify-content: center;
}

.select-label {
  display: flex;
  margin: auto;
}

.image-preview {
  max-width: 100%;
}

.image-wrapper {
  padding: 0.5rem;
  display: flex;
}

.file-input {
  display: none;
}
</style>

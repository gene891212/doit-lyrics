<template>
  <div class="details admonition" :class="[type, { open: isOpen }]">
    <div class="details-summary admonition-title" @click="isOpen = !isOpen">
      <span class="icon">
        <font-awesome-icon :icon="['fas', ADMONITION_ICON[type]]" fixed-width />
      </span>
      {{ title }}
      <span class="details-icon">
        <font-awesome-icon :icon="['fas', 'angle-right']" fixed-width />
      </span>
    </div>
    <div class="details-content">
      <div class="admonition-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'note'
  },
  title: {
    type: String,
    default: ''
  },
  open: {
    type: Boolean,
    default: true
  }
})

const ADMONITION_ICON = {
  note: 'pencil-alt',
  abstract: 'list-ul',
  info: 'info-circle',
  tip: 'lightbulb',
  success: 'check-circle',
  question: 'question-circle',
  warning: 'exclamation-triangle',
  failure: 'times-circle',
  danger: 'skull-crossbones',
  bug: 'bug',
  example: 'list-ol',
  quote: 'quote-right'
}

const checkType = (type) => {
  if (!Object.keys(ADMONITION_ICON).includes(type)) {
    console.error(`Invalid admonition type: ${type}`)
    return 'note'
  }
  return type
}

const isOpen = ref(props.open)
const type = ref(checkType(props.type))
// capitalize the first letter of the type if no title is provided
const title = ref(props.title || props.type.charAt(0).toUpperCase() + props.type.slice(1))
</script>

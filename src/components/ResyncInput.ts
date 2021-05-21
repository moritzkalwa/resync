import { computed, defineComponent, h, toRefs } from "vue"

export default defineComponent({
  name: "ResyncInput",
  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    pastable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { invalid, placeholder, modelValue } = toRefs(props)

    const classList = computed(() => {
      const base = ["resync-input"]
      if (invalid.value) base.push("invalid")
      return base
    })

    const onContextmenu = async (event: MouseEvent) => {
      if (!props.pastable) return
      if (!navigator.clipboard.readText) return

      event.preventDefault()
      const value = await navigator.clipboard.readText()
      emit("update:modelValue", value)
    }

    const onKeydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (event.key === "Escape") return target?.blur?.()
    }

    return () =>
      h("input", {
        onContextmenu,
        onKeydown,
        onInput: (event: any) => emit("update:modelValue", event.target.value),
        value: modelValue.value,
        class: classList.value,
        placeholder: placeholder.value,
        type: "text",
        spellcheck: false,
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
      })
  },
})

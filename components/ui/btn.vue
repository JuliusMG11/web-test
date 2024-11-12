<template>
    <button 
        class="global-btn"
        :class="type"
    >
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    },
    text: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

.global-btn {
    width: max-content;
    height: 56px;
    border-radius: 32px;
    padding-left: 22px;
    padding-right: 22px;
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Lato', sans-serif;

    &.primary {
        background-color: $black-color;
        color: $white-color;
    }
}

</style>
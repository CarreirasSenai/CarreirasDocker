<template>
    <div v-if="isVisible" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h2 style="margin-bottom: 15px;">{{ title }}</h2>
            <p style="margin-bottom: 5px;">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: false,
            default: ''
        },
        description: {
            type: String,
            required: false,
            default: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('update:isVisible', false);
        }
    }
};
</script>

<style>
.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 30px;
    border-radius: 5px;
    width: 40%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
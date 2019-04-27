<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta"> {{ fruta }} </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import futasMixin from './frutasMixin'
export default {
   mixins: [futasMixin]
}
</script>

<style>

</style>

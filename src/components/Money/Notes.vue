<template>
  <label class="notes">
    <span class="name">备注</span>
    <input id="xxx" type="text" v-model="value" placeholder="在这里输入备注">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    value = '';

    @Watch('value')
    onValueChanged(value: string) {
      this.$emit('update:value', value);
    }

    // onInput(event: KeyboardEvent) {
    //   const input = event.target as HTMLInputElement;
    //   this.value = input.value;
    // }
  }

</script>

<style lang="scss" scoped>
  .notes {
    background: #f5f5f5;
    display: block;
    padding-left: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
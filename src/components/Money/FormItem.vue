<template>
  <label class="formItem">
    <span class="name">{{this.fieldName}}</span>
    <input id="xxx" type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class FormItem extends Vue {
    // value = '';

    @Prop({required: true}) fieldName!: string;
    @Prop() placeholder?: string;
    @Prop({default:''}) value!: string;

    // @Watch('value')
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
  .formItem {
    display: block;
    padding-left: 16px;
    font-size: 14px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
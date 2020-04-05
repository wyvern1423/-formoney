<template>
  <ul class="types">
    <li :class="value === '-' && 'selected' " @click="selectType('-')">支出</li>
    <li :class="value === '+' && 'selected' " @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    type = '-'; // '-'表示支出，'+'表示收入

    // @Prop(Number) readonly propA: number | undefined;
    @Prop() readonly  value!: string;

    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type);
    }

    @Watch('type')
    onTypeChanged(value: string) {
      this.$emit('update:value', value);
    }

  }

</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;

    > li {
      width: 50%;
      line-height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: #333;
      }
    }
  }
</style>
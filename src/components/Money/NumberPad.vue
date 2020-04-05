<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="innerContext">1</button>
      <button @click="innerContext">2</button>
      <button @click="innerContext">3</button>
      <button @click="remove">删除</button>
      <button @click="innerContext">4</button>
      <button @click="innerContext">5</button>
      <button @click="innerContext">6</button>
      <button @click="clear">清空</button>
      <button @click="innerContext">7</button>
      <button @click="innerContext">8</button>
      <button @click=innerContext>9</button>
      <button class="ok" @click="ok">OK</button>
      <button class="zero" @click="innerContext">0</button>
      <button @click="innerContext">.</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {

    @Prop() value!: number;
    output = this.value.toString();

    innerContext(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent as string;
      // console.log(this.output.indexOf('.'));
      if (this.output.length === 16) {return;}
      if (this.output === '0') {
        if (input === '0') {
          return;
        }
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
          return;
        }
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;
    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }

    clear() {
      this.output = '0';
    }

    ok() {
      this.$emit('update:value', this.output);
      this.$emit('submit', this.output);
      this.output = this.value.toString();
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      @extend %clearFix;
      @extend %innerShadow;
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
      height: 72px;
    }

    .buttons {
      @extend %clearFix;

      > button {
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 25*2%;
        }

        $bgc: #f2f2f2;

        &:nth-child(1) {
          background: $bgc;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bgc, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bgc, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bgc, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bgc, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bgc, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bgc, 4*6%);
        }

      }
    }
  }
</style>
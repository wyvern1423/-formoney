<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" @update:value="onUpdateNotes" placeholder="在这里输入"/>
    </div>
    <Tags @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import oldStore from '@/store/index2';
  // import store from '@/store/index'

  // const version = window.localStorage.getItem('version') || '0';
  // const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  // if ((version === '0.0.1')){
  //   recordList.forEach(record =>{
  //     record.createdAt = new Date(2020,0,1);
  //   })
  //   window.localStorage.setItem('recordList',JSON.stringify(recordList));
  // }
  //
  // window.localStorage.setItem('version', '0.0.2');


  @Component({
    components: {Tags, FormItem, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = oldStore.tagList;

    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    recordList: RecordItem[] = oldStore.recordList;


    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      oldStore.createRecord(this.record);
    }
  }

</script>
<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }
</style>


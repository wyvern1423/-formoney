<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" :value.sync="record.notes" placeholder="在这里输入"/>
    </div>
    <Tags @update:value="onUpdateTags" :value="record.tags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import oldStore from '@/store/index2';
  import Tabs from '@/components/Money/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';

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
    components: {Tabs, Tags, FormItem, NumberPad},
  })
  export default class Money extends Vue {
    get recordList() {
      return this.$store.state.recordList;
    }

    tags = oldStore.tagList;
    recordTypeList = recordTypeList;

    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};

    created() {
      this.$store.commit('fetchRecords');
    }


    onUpdateTags(value: Tag[]) {
      this.record.tags = value;
    }

    // onUpdateNotes(value: string) {
    //   this.record.notes = value;
    // }

    saveRecord() {
      if (!this.record.tags || this.record.tags.length === 0) {
        window.alert('请选择至少一个标签');
        return;
      }
      this.$store.commit('createRecord', this.record);
      this.record.tags = [];
      this.record.notes= '';
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


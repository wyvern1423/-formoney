import tagListModel from '@/models/tagListMedel';

export default {
  //tag store
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string) => {
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    }
  },
  removeTag(id: string) {
    if (tagListModel.remove(id)) {
      this.tagList = tagListModel.fetch();
      return true;
    } else {
      return false;
    }
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};
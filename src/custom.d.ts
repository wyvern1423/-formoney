type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
}
type Tag = {
  id: string;
  name: string;
}
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag,
  createTagStatus?: boolean,
}

type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //success表示成功，duplicated表示name重复,联合类型
  save: () => void
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
}
type RecordList = {
  recordList: RecordItem[]
}

interface Window {
  store: {
    tagList: Tag[]
    findTag: (id: string) => Tag | undefined
    createTag: (name: string) => void
    removeTag: (id: string) => boolean
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    recordList: RecordItem[]
    createRecord: (record: RecordItem) => void
  }

}
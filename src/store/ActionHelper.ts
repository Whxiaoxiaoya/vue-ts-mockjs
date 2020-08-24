import DataHelper from './DataHelper'
import ItemData from '../model/ItemData'
import Category from '@/model/CateEnum';

// ActionHelper 数据处理 和 业务处理：
let memoData = 'memoData';
let id='id'
class ActionHelper { 
    dataHelper: DataHelper = new DataHelper(memoData, id);
    memoList!: Array<ItemData>;
    total!: object;

    constructor() { 
      this.memoList=this.readData()
    }
    //1.数据处理
    readData(): Array<ItemData> { 
        // 1.读取本地数据：
        let dataArr = this.dataHelper.readData();
        // 2.将 Object数组 转成 ItemData数组
        let itemArr = dataArr.map((v:any) => { 
            let item:ItemData=new ItemData()
            item.id = v.id
            item.categoryId = v.categoryId
            item.title = v.title
            item.content = v.content
            item.createTime = v.createTime
            return item
        })
        // 3.返回转换的数组：
        return itemArr
    }

    //2.业务处理：
    // 2.1 添加数据：
    addData(item:ItemData): number{ 
        let itemId = this.dataHelper.addData(item);
        this.memoList.push(item)
        this.dataHelper.saveData(this.memoList)
        return itemId
    }
    // 2.2 删除数据：
    remove(itemId:number) { 
        let index = this.memoList.findIndex((ele: any) => ele[id] == itemId);

        if (index>-1) { 
            this.memoList.splice(index, 1)
            this.dataHelper.saveData(this.memoList)
        }
    }
    // 2.3 修改数据：
    edit(item: ItemData) { 
        let editData:ItemData | undefined = this.memoList.find((ele: any) => ele[id] == item.id)
        if (editData) { 
            editData.categoryId = item.categoryId;
            editData.title = item.title;
            editData.content = item.content;

            // 存储：
            this.dataHelper.saveData(this.memoList)
        }
    } 

    // 转换枚举值：
    getCategoryName(cateId:Category):string {
      let arr=['工作', '生活', '学习']
      return arr[cateId]
    }

}

export default ActionHelper
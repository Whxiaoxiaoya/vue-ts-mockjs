// DataHepler 负责 操作localstorage：
class DataHepler { 
    dataKey!: string;
    primayKey!: string;
    constructor(dataKey:string="ItemData",primayKey:string="id") { 
        this.dataKey = dataKey;
        this.primayKey = primayKey;
    }

    // 1.读取数据：
    readData(){ 
        let jsonStr = localStorage.getItem(this.dataKey);
        let jsonArr = JSON.parse(jsonStr as string);
        return jsonArr?jsonArr:[]
    }

     // 2.存储数据：
     saveData(item: Array<object>): void { 
        let jsonStr=JSON.stringify(item)
        localStorage.setItem(this.dataKey,jsonStr)
     }
    
    // 3.添加数据：
    addData(item:any):number { 
        let jsonArr = this.readData();
        let id = jsonArr.length > 0 ? jsonArr[jsonArr.length - 1][this.primayKey] + 1 : 1;
        item[this.primayKey] = id;
        jsonArr.push(item)
        this.saveData(jsonArr)
        return item[this.primayKey]
    }

    // 4.删除数据：
    delData(itemId:number):void { 
        let jsonArr = this.readData();
        let arr = jsonArr.filter((item: any) => item[this.primayKey] != itemId);
        this.saveData(arr)
    }

}

export default DataHepler
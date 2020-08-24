import Category from './CateEnum'

class ItemData { 
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id:number=-1,categoryId:Category=0,title:string="",content:string="",createTime:string="") { 
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime=this.getDateTime(Date.now())
    }

    getDateTime(item: any): string { 
        // date
        let date = new Date(item)
        let str=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        return str
    }
}

export default ItemData
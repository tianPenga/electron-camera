class Drag {
    private pageX=0;
    private pageY=0;
    private body?: HTMLBodyElement;
    constructor() {

    }
    public run() {
        window.addEventListener('DOMContentLoaded', () => {
            this.body = document.querySelector('body')!

            this.body.addEventListener('mousedown',this.mouseDwon.bind(this)) //使用bind把this指向Drag类实例，而不是body

        })
    }

    private mouseDwon(event:MouseEvent){
        //记录鼠标点击的起始位置
        this.pageX=event.pageX
        this.pageY=event.pageY
        
        //使得事件是相同的
        const mouseCallback=this.mouseMove.bind(this)
        //绑定鼠标移动事件
        this.body?.addEventListener('mousemove',mouseCallback)

        //移除鼠标移动事件
        this.body?.addEventListener('mouseup',()=>{
            this.body?.removeEventListener('mousemove',mouseCallback)
        })
        this.body?.addEventListener('mouseout',()=>{
            this.body?.removeEventListener('mousemove',mouseCallback)
        })
    }
    private mouseMove(event:MouseEvent){
        const x=event.pageX-this.pageX;
        const y=event.pageY-this.pageY;
        window.api.drag({x,y})
        console.log(this.body?.clientWidth);
    }
}

export default () => {
    const drag = new Drag()
    return { drag }
}